import React from "react";
import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import style from "./style";
import Header from "../components/Header";
import Input from "../components/Input";
import SelecaoCategorias from "../components/SelecaoCategorias";
import TaskCard from "../components/TaskCard";
import NavigationBar from "../components/NavigationBar";
import BotaoModal from "../components/BotaoModal";

export default function Home() {
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <BotaoModal />
      <Input />
      <SelecaoCategorias />
      <TaskCard />
      <NavigationBar />
    </SafeAreaView>
  );
}
