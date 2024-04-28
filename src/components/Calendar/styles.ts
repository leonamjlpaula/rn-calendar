import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    lineHeight: 22.5,
  },
  dayTextNotInMonth: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    lineHeight: 22.5,
    color: "rgba(255, 255, 255, 0.2)",
  },
});
