import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import style from "./style";
const Status = () => {
  return (
    <View style={style.containerCategorias}>
      <Text style={style.textNomeCategoria}>Status</Text>

      <View style={style.containerBotoes}>
        <TouchableOpacity>
          <Text style={style.botoesCategorias}>A Fazer</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[style.botoesCategorias, { margin: 10 }]}>
            Em Progresso
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={style.botoesCategorias}>Finalizado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
