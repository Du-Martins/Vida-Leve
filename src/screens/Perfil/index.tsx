import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Perfil({ route }) {
  const navigation: any = useNavigation();
  const item = route.params.item;
  console.log(item);
  return (
    <View style={styles.container}>
      <Image
        style={styles.containerLogo}
        source={require("../../assets/logo.png")}
      />
      <View style={styles.containerInfo}>
      <Text style={styles.textInfo}>Nome: {item.nome} </Text>
      <Text style={styles.textInfo}>Email: {item.email}</Text>
      <Text style={styles.textInfo}>CPF: {item.cpf}</Text>
      <Text style={styles.textInfo}>Telefone: {item.telefone}</Text>
      <Text style={styles.textInfo}>Bairro: {item.bairro}</Text>
      <Text style={styles.textInfo}>Rua: {item.rua}</Text>
      <Text style={styles.textInfo}>Número: {item.numero}</Text>
      </View> 
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonRetornar}
      >
        <Text style={styles.textButton}>Retornar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FichaTecnica", {pacienteId:item.pacienteId})}
      style={styles.buttonRetornar}>
        <Text style={styles.textButton}>Anamnese</Text>
      </TouchableOpacity>
    </View>
  );
}
