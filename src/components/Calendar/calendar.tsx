import { View, StyleSheet } from "react-native";
import { Text } from "../text";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 350,
    borderColor: "#B7B7B7",
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: "#131313",
  },
});

export const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text>March 2023</Text>
    </View>
  );
};
