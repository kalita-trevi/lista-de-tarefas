import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%", // Use largura proporcional
    marginBottom: 10,
    alignSelf: "center", // Centraliza o container na tela
  },
  containerInput: {
    padding: 10,
    width: "100%", // Garante que ocupe toda a largura do container pai
    flexDirection: "row",
    height: 44,
    backgroundColor: "#f6f6f6",
    borderRadius: 10,
    alignItems: "center", // Centraliza os itens verticalmente
  },
  containerIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgIcon: {
    width: 24,
    height: 24,
  },
  textInput: {
    flex: 1, // Permite que o campo de texto ocupe o espaço restante no container
    marginLeft: 10,
  },
});
export default styles;
