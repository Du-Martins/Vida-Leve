import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function EsqueceuSenha({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require("../../assets/logo.png")} />
      <Text style={styles.textEsqueciSenha}>Esqueceu a senha?</Text>
        <View style={styles.textBox}>
        <Text style={styles.textLogin}>E-mail ou Telefone:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="email ou telefone"
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("DefinirSenha")}style={styles.buttonLogin}>
        <Text style={styles.textButton}>Prosseguir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack("Login")} style={styles.buttonVoltar}>
        <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
