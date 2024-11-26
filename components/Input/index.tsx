import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./style";

const Input = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <View style={styles.containerIcon}>
          <Image
            style={styles.imgIcon}
            source={require("../../assets/images/lupa.png")}
          ></Image>
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Pesquisar.."
          placeholderTextColor={"gray"}
        ></TextInput>
      </View>
    </View>
  );
};

export default Input;
