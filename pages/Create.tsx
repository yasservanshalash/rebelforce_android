import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import GeneralListItem from "../components/GeneralListItem";
import TextListItem from "../components/TextListItem";
import InsertListItem from "../components/InsertListItem";
import Navbar2 from "../components/Navbar2";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const Create = () => {
  const [text, setText] = useState("My theme #1");
  return (
    <View style={styles.container}>
      <Navbar2
        left="👈🏽 Themes"
        right="Delete"
        title="create"
        leftColor="#AF8E39"
        rightColor="#FF5646"
      />
      <TextInput
        value={text}
        onChangeText={setText}
        style={{
          width: "85%",
          alignSelf: "center",
          padding: 20,
          backgroundColor: "white",
        }}
      />
      <Text style={{ margin: 20, fontWeight: "bold", paddingLeft: 25 }}>
        General
      </Text>
      <FlatList
        data={[
          { key: "Background", index: 1, color: "#FFF5EF" },
          { key: "Background semitone", index: 2, color: "#F4E7D0" },
          { key: "Primary accent", index: 3, color: "#E74334" },
          { key: "Secondary accent", index: 4, color: "#AF8E39" },
          { key: "Selection markers", index: 5, color: "#E74334" },
        ]}
        renderItem={({ item }) => (
          <GeneralListItem
            item={item.key}
            index={item.index}
            color={item.color}
          />
        )}
      />
      <Text style={{ margin: 20, fontWeight: "bold", paddingLeft: 25 }}>
        Text
      </Text>
      <FlatList
        data={[
          { key: "Title", index: 1, color: "#3A2337" },
          { key: "Heading", index: 2, color: "#3A2337" },
          { key: "Subheading", index: 3, color: "#3A2337" },
          { key: "Subheading 2", index: 4, color: "#3A2337" },
          { key: "Subheading 3", index: 5, color: "#3A2337" },
          { key: "Normal text", index: 6, color: "#3A2337" },
        ]}
        renderItem={({ item }) => (
          <TextListItem item={item.key} index={item.index} color={item.color} />
        )}
      />
      <Text style={{ margin: 20, fontWeight: "bold", paddingLeft: 25 }}>
        Insert
      </Text>
      <FlatList
        data={[
          { key: "Quote", index: 1, color: "#3A2337" },
          { key: "Link", index: 2, color: "#E74334" },
          { key: "Callout", index: 3, color: "#8F8C83" },
          { key: "Line break", index: 4, color: "#8F8C83" },
          { key: "Highlight", index: 5, color: "#FFDE69" },
        ]}
        renderItem={({ item }) => (
          <InsertListItem
            item={item.key}
            index={item.index}
            color={item.color}
          />
        )}
      />
    </View>
  );
};

export default Create;
