import React, { useEffect, useState } from "react";
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
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function NovoPaciente({ route }) {
  const navigation=useNavigation()
  const id = route.params.id;
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");

  const storeData = async () => {
    const pacienteId = uuid.v4();

    const newData = {
      id,
      pacienteId,
      nome,
      email,
      cpf,
      telefone,
      bairro,
      rua,
      numero,
    };
    const response = await AsyncStorage.getItem("@vidaleve:paciente");
    const previousData = response ? JSON.parse(response) : [];

    const data = [...previousData, newData];

    await AsyncStorage.setItem("@vidaleve:paciente", JSON.stringify(data));
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.containerLogo}
          source={require("../../assets/logo.png")}
        />
        <View style={styles.textBox}>
          <Text style={styles.textName}>Nome Completo:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setNome(text)}
            value={nome}
            placeholder="ex: Luiza Campos"
            keyboardType="name-phone-pad"
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textEmail}>Email:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="ex: exemplo@gmail.com"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textCpf}>CPF:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setCpf(text)}
            value={cpf}
            placeholder="ex: 12345678910"
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textNumero}>Telefone:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setTelefone(text)}
            value={telefone}
            placeholder="ex: 19998527863"
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textBairro}>Bairro:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setBairro(text)}
            value={bairro}
            placeholder="ex: vila brasil"
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textRua}>Rua:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setRua(text)}
            value={rua}
            placeholder="ex: José Osorio de Paiva"
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textNumeroC}>Número:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setNumero(text)}
            value={numero}
            placeholder="ex: 46"
            keyboardType="number-pad"
          />
        </View>
        <TouchableOpacity
          onPress={() => storeData()}
          style={styles.buttonCriar}
        >
          <Text style={styles.textButton}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonRetornar}
        >
          <Text style={styles.textButton}>Retornar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
