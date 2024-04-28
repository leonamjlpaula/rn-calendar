import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../text";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useCallback, useEffect, useMemo, useState } from "react";
import { generateCalendar } from "../../utils/generators";
import { addMonths, subMonths, format, isSameMonth, isEqual } from "date-fns";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 288,
    borderColor: "#B7B7B7",
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: "#131313",
  },
  monthControlsContainer: {
    flexDirection: "row",
    gap: 9,
    position: "absolute",
    right: 21,
    top: 20,
  },
  titleContainer: {
    flexDirection: "row",
    paddingLeft: 18,
    paddingTop: 8,
    gap: 4,
    alignItems: "baseline",
  },
  month: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
  },
  year: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 25,
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 8,
    columnGap: 32,
    marginTop: 24,
    paddingLeft: 11,
    paddingRight: 13,
  },
  dayStyle: {
    height: 27,
    width: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedDayStyle: {
    backgroundColor: "#00A19B",
    height: 27,
    width: 27,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  dayText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
  },
  dayTextNotInMonth: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.2)",
  },
});

export const Calendar = () => {
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
    const gap = (componentWidth - 2 - 11 - 13 - 6 * 27) / 5;
    return {
      columnGap: gap,
    };
  }, [componentWidth]);

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
            onPress={() => setSelectedDate(day)}
          >
            <View
              style={[
                isEqual(day, selectedDate)
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
