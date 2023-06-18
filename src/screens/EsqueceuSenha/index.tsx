import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import auth from "@react-native-firebase/auth";
import { useState } from "react";

export default function EsqueceuSenha({ navigation }) {
  const [email, setEmail] = useState("");
  function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        {Alert.alert("Redefinir senha", "Enviamos um e-mail para você")
        navigation.navigate("DefinirSenha")})
      .catch((error) => console.log(error));
  }
  return (
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require("../../assets/logo.png")} />
      <Text style={styles.textEsqueciSenha}>Esqueceu a senha?</Text>
      <View style={styles.textBox}>
        <Text style={styles.textLogin}>E-mail:</Text>
        <TextInput
          onChangeText={(text)=> setEmail(text)}
          value={email}
          style={styles.textInput}
          placeholder="exemplo@gmail.com"
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          handleForgotPassword()
        } 
        style={styles.buttonLogin}
      >
        <Text style={styles.textButton}>Prosseguir</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack("Login")}
        style={styles.buttonVoltar}
      >
        <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
