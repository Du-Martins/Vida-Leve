import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export default function CriarConta({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [repetir, setRepetir] = useState("");

  const storeData = async () => {
    const id = uuid.v4();

    const newData = {
      id,
      nome,
      email,
      cpf,
      telefone,
      password,
      repetir,
    };

    const response = await AsyncStorage.getItem("@vidaleve:conta");
    const previousData = response ? JSON.parse(response) : [];

    const data = [...previousData, newData];

    await AsyncStorage.setItem("@vidaleve:conta", JSON.stringify(data));
    navigation.navigate("Login")
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
          <Text style={styles.textSenha}>Senha:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
            placeholder="*******"
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textRepetir}>Repetir Senha:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setRepetir(text)}
            value={repetir}
            secureTextEntry
            placeholder="*******"
          />
        </View>
        <TouchableOpacity
          onPress={() =>  storeData() }
          style={styles.buttonCriar}
        >
          <Text style={styles.textButton}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack("Login")}
          style={styles.buttonRetornar}
        >
          <Text style={styles.textButton}>Retornar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
