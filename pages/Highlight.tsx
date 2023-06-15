import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NavBar2 from "../components/Navbar2";
import ColorPickerSection from "../components/ColorPicker";

export default function Highlight() {
  return (
    <View>
      <NavBar2
        left="Cancel"
        right="Done"
        title="Highlight"
        leftColor="#AF8E39"
        rightColor="#AF8E39"
      />
      <ColorPickerSection />
    </View>
  );
}

const styles = StyleSheet.create({});
