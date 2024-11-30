import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escuro semitransparente
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  textModal: {
    fontSize: 18,
    marginBottom: 10,
    color: "black",
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;
