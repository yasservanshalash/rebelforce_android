import React, { useState } from 'react';
import { Pressable, Modal, StyleSheet, Text, View } from 'react-native';

import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider, Panel5 } from 'reanimated-color-picker';

export default function ColorPickerSection() {

  const [percentage, setPercentage] = useState(100)
  const hexOpacityToPercentage = (hexOpacity: string) => {
    // Convert the hex opacity to decimal
    const decimalOpacity = parseInt(hexOpacity, 16) / 255;
  
    // Convert decimal opacity to percentage
    const percentageOpacity = decimalOpacity * 100;
  
    // Return the result as a string with '%' appended
    setPercentage(Number(percentageOpacity.toFixed(0)));
  }
  
  const onSelectColor = ({ hex }: {hex: any}) => {
    if(hex.length < 8) {
      setPercentage(100)
    } else {
      hexOpacityToPercentage(hex.slice(7,9))

    }
    // do something with the selected color.
    console.log(hex)
  };
  const [activeButton, setActiveButton] = useState("Grid")

  return (
    <View style={styles.container}>
        <View style={{padding: 3, borderRadius: 8, width: "85%", flexDirection: "row", backgroundColor: "#EEE5D7", alignSelf: "center", justifyContent: "space-between"}}>
        <Pressable style={{backgroundColor: activeButton === "Grid" ? "white" : "transparent", width: "33.3%", borderRadius: 8, padding: 9}} onPress={() => setActiveButton("Grid")}>
            <Text style={{color: "black", textAlign: "center"}}>Grid</Text>
        </Pressable>
        <Pressable style={{backgroundColor: activeButton === "Spectrum" ? "white" : "transparent", width: "33.3%", borderRadius: 8, padding: 9}} onPress={() => setActiveButton("Spectrum")}>
            <Text style={{color: "black", textAlign: "center"}}>Spectrum</Text>
        </Pressable>
        <Pressable style={{backgroundColor: activeButton === "Sliders" ? "white" : "transparent", width: "33.3%", borderRadius: 8, padding: 9}} onPress={() => setActiveButton("Sliders")}>
            <Text style={{color: "black", textAlign: "center"}}>Sliders</Text>
        </Pressable>
        </View>
        <ColorPicker style={{ width: '95%', alignSelf: "center" }} value='#BE38F3' onComplete={onSelectColor} onChange={onSelectColor}>
          <View style={{margin: 20}}>
          <Panel5 />
        </View>
        <Text>Opacity</Text>
        <View style={{flexDirection: "row", gap:20, width: "100%", justifyContent: "space-between", alignContent:"space-between", paddingVertical: 20}}>
        <OpacitySlider style={{width: "65%", padding: 100, position: "relative", left: 20, top: 0}}/>
        <Text style={{width: "20%", backgroundColor: "white", padding: 5, borderRadius: 20, textAlign: "center"}}>{percentage}%</Text>
            </View>
          {/* <Swatches /> */}
        </ColorPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    gap: 20,
  },
});