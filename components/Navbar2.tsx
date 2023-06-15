import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NavBar2({
  right,
  rightColor,
  left,
  leftColor,
  title,
}: {
  right: string;
  rightColor: string;
  leftColor: string;
  left: string;
  title: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={{ color: leftColor }}>{left}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={{ color: rightColor }}>{right}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#3A2337",
    fontSize: 32,
    fontWeight: "bold",
    borderWidth: 0,
    position: "relative",
    right: "3%",
  },
});
