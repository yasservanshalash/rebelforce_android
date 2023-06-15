import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from "react-native";
import ThemesPage from "./pages/ThemesPage";
import Create from "./pages/Create";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <ThemesPage />
      <Create />
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
