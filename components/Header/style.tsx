import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    width: "90%",
    backgroundColor: "white",
  },
  containerImg: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgProfile: {
    borderRadius: "100%",
    width: 46,
    height: 46,
  },

  containerIcon: {
    borderRadius: "100%",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1,
  },

  imgIcon: {
    width: 28,
    height: 28,
    padding: 6,
  },
  containerText: {
    flexDirection: "column",
    justifyContent: "center",
    height: 70,
    paddingLeft: 10,
  },
  textSaudacao: {
    color: "535353",
    fontSize: 12,
  },
  textName: {
    color: "000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;
