import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCategorias: {
    height: 83,
    width: "90%",
  },
  textNomeCategoria: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  containerBotoes: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 70,
    width: "100%",
    backgroundColor: "white",
  },
  botoesCategorias: {
    borderColor: "#rgba(218, 218, 218, 1)",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 12,

    marginTop: 0,
    fontWeight: "semibold",
  },
});

export default styles;
