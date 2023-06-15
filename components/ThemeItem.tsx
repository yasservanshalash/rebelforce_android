import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ThemeItem({
  title,
  titleColor,
  pseudoColor,
  emphasise,
  bgColor,
  textColor,
  borderColor,
}: {
  title: string;
  titleColor: string;
  pseudoColor: string;
  emphasise: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}) {
  return (
    <View
      style={{
        width: "90%",
        padding: 20,
        alignSelf: "center",
        gap: 10,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: 2,
        borderRadius: 15,
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      }}
    >
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text style={{ fontSize: 18, color: textColor }}>⾊</Text>
        <Text style={{ fontSize: 18, color: titleColor, fontWeight: "bold" }}>
          {title}
        </Text>
      </View>
      <View>
        <Text style={{ color: textColor }}>
          <Text style={{ fontWeight: "bold" }}>Lorem ipsum </Text>
          &nbsp;is a &nbsp;
          <Text style={{ color: pseudoColor, textDecorationLine: "underline" }}>
            pseudo text
          </Text>
          <Text> &nbsp;</Text>
          used in design to &nbsp;
          <Text style={{ backgroundColor: emphasise }}>emphasise</Text> design
          elements over content.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
