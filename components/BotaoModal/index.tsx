import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./style"; // Importando os estilos

const BotaoModal = () => {
  const [visivel, setVisivel] = useState(false); // Estado para controlar a modal

  return (
    <View style={styles.container}>
      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={visivel}
        onRequestClose={() => setVisivel(false)} // Fechar modal no Android
      >
        <View style={styles.containerModal}>
          <View style={styles.modalContent}>
            <Text style={styles.textModal}>Modal</Text>
            <Text style={styles.textModal}>Conteúdo 1</Text>
            <Text style={styles.textModal}>Conteúdo 2</Text>

            {/* Botão para fechar a Modal */}
            <TouchableOpacity onPress={() => setVisivel(false)}>
              <Text style={styles.textModal}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Botão para abrir a Modal */}
      <TouchableOpacity onPress={() => setVisivel(true)} style={styles.button}>
        <Text style={styles.text}>Abrir Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BotaoModal;
