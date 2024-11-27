import React from "react";
import { View, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import style from "./style";
import Header from "../components/Header";
import Input from "../components/Input";
import SelecaoCategorias from "../components/SelecaoCategorias";
import TaskCard from "../components/TaskCard";
import NavigationBar from "../components/NavigationBar";
import Modalmenu from "../components/Modalmenu";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <SafeAreaView style={style.container}>
      <Header />

      <Input />
      <SelecaoCategorias />
      <TaskCard />
      <NavigationBar />
    </SafeAreaView>
  );
}
