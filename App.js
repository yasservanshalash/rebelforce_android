import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from "react-native";
import ThemesPage from "./pages/ThemesPage";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <ThemesPage />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff5e4",
  },
});
