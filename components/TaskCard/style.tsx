import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerComponente: {
    width: "90%",
    height: 590,
  },
  containerCards: {
    width: "100%",
  },
  cards: {
    justifyContent: "center",
    borderColor: "#rgba(218, 218, 218, 1)",
    borderWidth: 1,
    width: "100%",
    height: 180,
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  textStatus: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0560FD",
  },
  textTarefa: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  textProgress: {
    color: "gray",
    fontWeight: "bold",
    marginTop: 10,
  },
  containerCamposData: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  containerIcon: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 10,
  },
  imgIcon: {
    width: 16,
    height: 16,
  },
  textData: {},
  containerBotao: {
    alignItems: "flex-end", // Centraliza o botão
  },
  botao: {
    backgroundColor: "#0560FD", // Cor de fundo azul
    fontSize: 12,
    fontWeight: "bold",
    justifyContent: "center", // Centraliza verticalmente o texto
    alignItems: "center", // Centraliza horizontalmente o texto
    padding: 5,
    borderRadius: 20, // Arredonda as bordas do botão
    width: 66,
    height: 26,
  },
  textBotao: {
    color: "white", // Texto branco para contraste
    fontWeight: "semibold",
    fontSize: 12,
  },
});

export default styles;
