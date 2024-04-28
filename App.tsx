import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text } from "./src/components/text";
import { Calendar } from "./src/components/Calendar/calendar";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { useState } from "react";
import { format } from "date-fns";

export default function App() {
  const [date, setDate] = useState(new Date());

  let [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Calendar</Text>
      <Calendar onDateSelected={(date) => setDate(date)} />
      <Text style={styles.title}>{format(date, "MMMM, dd, yyyy")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
  },
});
