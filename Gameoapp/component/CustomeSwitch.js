import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ToggleButton = ({ options1, options2, selectionMode, onSelected }) => {
  const [selectedOption, setSelectedOption] = useState(selectionMode);

  function updateSwitchData(value) {
    setSelectedOption(value);
    onSelected(value);
  }
  return (
    <View
      style={{
        height: 44,
        width: "96%",
        backgroundColor: "#fff",
        borderColor: "#AD40AF",
        flexDirection: "row",
        justifyContent: "center",
        borderWidth: 2,
        marginLeft: 10,
        marginVertical: 10,
        borderRadius: 8,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: selectedOption === 1 ? "#C54B5A" : "#FFF",
          borderBottomLeftRadius: 8,
          borderTopLeftRadius: 8,
        }}
      >
        <TouchableOpacity
          style={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}
          activeOpacity={1}
          onPress={() => updateSwitchData(1)}
        >
          <Text
            style={{
              color: selectedOption === 1 ? "#fff" : "#C54B5A",
              fontSize: 18,
            }}
          >
            {options1}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
         
          borderBottomRightRadius: 8,
          borderTopRightRadius: 8,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: selectedOption === 2 ? "#C54B5A" : "#fff",
        }}
      >
        <TouchableOpacity  style={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} activeOpacity={1} onPress={() => updateSwitchData(2)}>
          <Text
            style={{
              color: selectedOption === 2 ? "#fff" : "#C54B5A",
              fontSize: 18,
            }}
          >
            {options2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToggleButton;
