import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text } from "./src/components/text";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
  },
});
