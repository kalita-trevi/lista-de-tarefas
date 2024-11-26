import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import style from "./style";

const TaskCard = () => {
  const tarefas = ["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4", "Tarefa 5"];

  return (
    <View style={style.containerComponente}>
      <FlatList
        style={style.containerCards}
        data={tarefas} // Array de dados
        keyExtractor={(item, index) => index.toString()} // Define uma chave única para cada item
        renderItem={({ item }) => (
          <View style={style.cards}>
            {/* Exibição do status da tarefa */}
            <Text style={style.textStatus}>Design</Text>
            <Text style={style.textTarefa}>The Logo Process</Text>
            <Text style={style.textProgress}>Progresso...</Text>

            {/* Campos de data e ícone */}
            <View style={style.containerCamposData}>
              <View style={style.containerIcon}>
                <Image
                  style={style.imgIcon}
                  source={require("../../assets/images/calendario.png")}
                />
                <Text style={style.textData}>09/12/1997</Text>
              </View>

              <View style={style.containerIcon}>
                <Image
                  style={style.imgIcon}
                  source={require("../../assets/images/flag.png")}
                />
                <Text style={style.textData}>09/12/1997</Text>
              </View>
            </View>

            {/* Botão de ação */}
            <View style={style.containerBotao}>
              <TouchableOpacity style={style.botao}>
                <Text style={style.textBotao}>Ação</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TaskCard;
