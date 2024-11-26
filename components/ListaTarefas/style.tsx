import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o contêiner ocupe toda a tela
    backgroundColor: "#272d4d",
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    // Exibe os itens lado a lado // Permite que os itens quebrem para a próxima linha// Espaçamento horizontal entre os itens
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  containerTarefa: {
    height: 150,
    width: 150,
    backgroundColor: "#83b8aa",
    padding: 10,
    borderColor: "#ffb350",
    borderWidth: 4,
    borderRadius: 20,
    margin: 25, // Adiciona espaço entre os itens
    justifyContent: "center", // Alinha o texto verticalmente
    alignItems: "center", // Alinha o texto horizontalmente
  },
  textTarefa: {
    color: "#c7b9c5",
    fontSize: 25,
    borderBottomColor: "#ffb350",
    borderBottomWidth: 5,
    width: "100%",
    backgroundColor: "#272d4d",
    textAlign: "center",
  },
  conteinerInput: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    width: "100%",
    backgroundColor: "#272d4d",
    padding: 10,
    borderColor: "#c7b9c5",
    borderWidth: 2,
    color: "#f8c7c9",
    borderRadius: 20,
  },
});

export default styles;
