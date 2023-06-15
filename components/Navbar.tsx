import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Navbar({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text>👈🏾 Account</Text>
      <Text style={styles.title}>Themes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  title: {
    color: "#3A2337",
    fontSize: 32,
    fontWeight: "bold",
    borderWidth: 0,
    position: "relative",
  },
});
