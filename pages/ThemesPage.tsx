import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import ThemeItem from "../components/ThemeItem";

const themeData = [
  {
    title: "Default",
    titleColor: "black",
    pseudoColor: "#EA594A",
    emphasise: "#FFDE69",
    bgColor: "#fff5e4",
    textColor: "black",
    borderColor: "#E74334",
  },
  {
    title: "Default Dark",
    titleColor: "white",
    pseudoColor: "#DC4134",
    emphasise: "#AA7900",
    bgColor: "#332531",
    textColor: "white",
    borderColor: "#332531",
  },
  {
    title: "Classic",
    titleColor: "black",
    pseudoColor: "#579AFE",
    emphasise: "#FFF175",
    bgColor: "#FAFAFA",
    textColor: "black",
    borderColor: "#FAFAFA",
  },
  {
    title: "Spring",
    titleColor: "#293479",
    pseudoColor: "#EA594A",
    emphasise: "#F3E45D",
    bgColor: "#FFFAE8",
    textColor: "#293479",
    borderColor: "#FFFAE8",
  },
  {
    title: "Space",
    titleColor: "#A383FF",
    pseudoColor: "#9739E2",
    emphasise: "#571F55",
    bgColor: "#131619",
    textColor: "white",
    borderColor: "#131619",
  },
  {
    title: "Colorful",
    titleColor: "#508C0B",
    pseudoColor: "#FF5c00",
    emphasise: "#D5F02B",
    bgColor: "#FCFBFA",
    textColor: "#000730",
    borderColor: "#FCFBFA",
  },
  {
    title: "My theme #1",
    titleColor: "#0B1D45",
    pseudoColor: "#EA3BE5",
    emphasise: "#E9CCFF",
    bgColor: "#EFF4FF",
    textColor: "#173474",
    borderColor: "#EFF4FF",
  },
];

export default function ThemesPage() {
  return (
    <View style={styles.container}>
      <Navbar title="Themes" />
      <View style={styles.themeContainer}>
        {themeData.map((theme, index) => (
          <ThemeItem key={index} {...theme} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            // Handle press event
          }}
        >
          <Text style={styles.buttonText}>➕ Create own theme</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 20,
  },
  themeContainer: {
    gap: 20,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "transparent",
    padding: 25,
    width: "90%",
    textAlign: "center",
    // border: "1px dashed #E74334",
    borderWidth: 1,
    borderColor: "#E74334",
    borderStyle: "dashed",
    borderRadius: 10,
  },
  buttonText: {
    color: "#E74334",
    fontWeight: "bold",
    textAlign: "center",
  },
});
