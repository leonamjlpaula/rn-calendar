import { View, TouchableOpacity } from "react-native";
import { Text } from "../text";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useCallback, useEffect, useMemo, useState } from "react";
import { generateCalendar } from "../../utils/generators";
import { addMonths, subMonths, format, isSameMonth, isSameDay } from "date-fns";
import { styles } from "./styles";

interface CalendarProps {
  onDateSelected: (date: Date) => void;
}

export const Calendar = ({ onDateSelected }: CalendarProps) => {
  const [componentWidth, setComponentWidth] = useState(0);
  const [daysInCalendar, setDaysInCalendar] = useState<Date[]>([]);
  const [yearMonthInCalendar, setYearMonthInCalendar] = useState<Date>(
    new Date()
  );
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    setDaysInCalendar(generateCalendar(yearMonthInCalendar));
  }, [yearMonthInCalendar]);

  const handleDecrementMonth = useCallback(() => {
    setYearMonthInCalendar(subMonths(yearMonthInCalendar, 1));
  }, [yearMonthInCalendar]);

  const handleIncrementMonth = useCallback(() => {
    setYearMonthInCalendar(addMonths(yearMonthInCalendar, 1));
  }, [yearMonthInCalendar]);

  const columnGapStyle = useMemo(() => {
    //Calculate gap based available width
    const gap = (componentWidth - 2 - 11 - 13 - 6 * 27) / 5;
    return {
      columnGap: gap,
    };
  }, [componentWidth]);

  const handleSelectedDate = useCallback(
    (date: Date) => {
      onDateSelected(date);
      setSelectedDate(date);
    },
    [onDateSelected]
  );

  return (
    <View
      style={styles.container}
      onLayout={(e) => setComponentWidth(e.nativeEvent.layout.width)}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.month}>{format(yearMonthInCalendar, "MMMM")}</Text>
        <Text style={styles.year}>{format(yearMonthInCalendar, "yyyy")}</Text>
      </View>
      <View style={[styles.daysContainer, columnGapStyle]}>
        {daysInCalendar.map((day) => (
          <TouchableOpacity
            key={day.toDateString()}
            disabled={!isSameMonth(day, yearMonthInCalendar)}
            onPress={() => handleSelectedDate(day)}
          >
            <View
              style={[
                isSameDay(day, selectedDate)
                  ? styles.selectedDayStyle
                  : styles.dayStyle,
              ]}
            >
              <Text
                style={
                  isSameMonth(day, yearMonthInCalendar)
                    ? styles.dayText
                    : styles.dayTextNotInMonth
                }
              >
                {format(day, "d")}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.monthControlsContainer}>
        <TouchableOpacity onPress={handleDecrementMonth} hitSlop={4}>
          <Icon name="chevron-left" size={15} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIncrementMonth} hitSlop={4}>
          <Icon name="chevron-right" size={15} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
