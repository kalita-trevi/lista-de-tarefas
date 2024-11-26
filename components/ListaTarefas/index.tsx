import React from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import styles from "./style";

const ListaTarefas = () => {
  const tarefas = [
    "Tarefa 1",
    "Tarefa 2",
    "Tarefa 3",
    "Tarefa 4",
    "Tarefa 5",
    "Tarefa 6",
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas} // Array de dados
        keyExtractor={(item, index) => index.toString()} // Define uma chave única para cada item
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.containerTarefa}>
            <Text style={styles.textTarefa}>{item}</Text>
            <View style={styles.conteinerInput}>
              <TextInput
                style={{ color: "#00ff9f" }}
                placeholder="Digite sua tarefa"
              />
            </View>
          </View>
        )}
        numColumns={2} // Configura o número de colunas para exibir os itens lado a lado
      />
    </View>
  );
};

export default ListaTarefas;
