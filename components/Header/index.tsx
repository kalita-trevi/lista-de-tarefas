import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={require("../../assets/images/test.png")}
          style={styles.imgProfile}
        />
        <View style={styles.containerText}>
          <Text style={styles.textSaudacao}>Hello</Text>
          <Text style={styles.textName}>Kilinho</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.containerIcon}>
        <Image
          style={styles.imgIcon}
          source={require("../../assets/images/menu.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
