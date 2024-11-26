import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerIcon}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;
