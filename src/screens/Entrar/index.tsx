import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Entrar({ route }) {
  const id = route.params.id;
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState({});
  const [data, setData] = useState([]);

  async function handleRemove(id: string, usuarioId) {
    Alert.alert("Deseja remover esse item da sua lista?", "", [
      {
        text: "Sim",
        onPress: async () => {
          const response = await AsyncStorage.getItem("@vidaleve:paciente");
          const previousData = response ? JSON.parse(response) : [];

          const data = previousData.filter((item) => item.pacienteId !== id);
          const filteredArray = data.filter((item) => item.id === usuarioId);
          AsyncStorage.setItem("@vidaleve:paciente",JSON.stringify(data));
          setData(filteredArray);
        },
        style: "cancel",
      },
      {
        text: "Não",
        onPress: () => {
          return;
        },
      },
    ]);
  }

  async function handleFetchData(usuarioId) {
    const response = await AsyncStorage.getItem("@vidaleve:paciente");
    const data = response ? JSON.parse(response) : [];
    if (response) {
      const filteredArray = data.filter((item) => item.id === usuarioId);
      filteredArray ? setData(filteredArray) : setData([]);
      return;
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@vidaleve:conta");
      const data = value ? JSON.parse(value) : {};
      const filteredArray = data.find((item) => item.id === id);
      setUsuario(filteredArray);
      handleFetchData(filteredArray.id);
    } catch (e) {}
  };
  // useEffect(() => {
  //   getData();
  //   handleFetchData();
  // }, []);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );
  return (
    <View style={styles.container}>
      <Image
        style={styles.containerLogo}
        source={require("../../assets/logo.png")}
      />
      <View style={styles.container}>
        <Image
          style={styles.containerDoctor}
          source={require("../../assets/icondoctor.png")}
        />
        <Text style={styles.textBv}>Olá, {usuario.nome}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("NovoPaciente", { id: usuario.id })}
      >
        <Text style={styles.textButtton}>Adicionar novo paciente</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.pacienteId.toString()}
        renderItem={({ item }) => (
          <View style={styles.containerItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Perfil", { item: item })}
              style={styles.item}
            >
              <Text style={styles.title}>{item.nome}</Text>
            </TouchableOpacity>
            <View style={styles.conteinerIcon}>
              <TouchableOpacity onPress={() => handleRemove(item.pacienteId, item.id)} >
                <Icon name="delete-outline" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={styles.containerLista}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonVoltar}
      >
        <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
