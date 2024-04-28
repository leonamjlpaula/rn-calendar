import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../text";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useCallback, useMemo, useState } from "react";

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
    // backgroundColor: "blue",
    height: 27,
    width: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  dayText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
  },
});

const days = [
  27,
  28,
  ...Array.from({ length: 31 }, (_, index) => index + 1),
  1,
  2,
  3,
];

export const Calendar = () => {
  const [componentWidth, setComponentWidth] = useState(0);
  const handleDecrementMonth = useCallback(() => {}, []);

  const handleIncrementMonth = useCallback(() => {}, []);

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
        <Text style={styles.month}>March</Text>
        <Text style={styles.year}>2023</Text>
      </View>
      <View style={[styles.daysContainer, columnGapStyle]}>
        {days.map((day) => (
          <View style={styles.dayStyle}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
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
