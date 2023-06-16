import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TextListItem(props) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "85%",
        padding: 20,
        alignSelf: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderTopLeftRadius: props.index === 1 ? 20 : 0,
        borderTopRightRadius: props.index === 1 ? 20 : 0,
        borderBottomLeftRadius: props.index === 6 ? 20 : 0,

        borderBottomRightRadius: props.index === 9 ? 20 : 0,
        borderBottomWidth: props.index === 6 ? 0 : 1,
      }}
    >
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Text>⾊</Text>
        <Text>{props.item}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        {
          props.index === 6 ?         <Text
          style={{ display: props.index === 6 ? "flex" : "none", color: "#FF0000" }}
        >
          Apply to all
        </Text> : ""
        }

        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 100,
            backgroundColor: `${props.color}`,
          }}
        ></View>
        <Text>👉🏾</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
