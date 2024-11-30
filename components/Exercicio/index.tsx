import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Exercicio = (props) => {
  // Criamos um estado local para o contador
  const [contador, setContador] = useState(props.contadorInicial);

  // Função chamada quando o botão é pressionado
  const incrementar = () => {
    const novoValor = contador + 1; // Soma 1 ao valor atual
    setContador(novoValor); // Atualiza o estado local
    props.onAtualizar(novoValor); // Chama a função do pai e envia o novo valor
  };

  return (
    <View>
      <Text>Contador Local: {contador}</Text>
      <Button title="Incrementar" onPress={incrementar} />
    </View>
  );
};

export default Exercicio;
