import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function DefinirSenha({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.containerLogo}
        source={require("../../assets/logo.png")}
      />
      <View style={styles.textBox}>
        <Text style={styles.textDefinir}>Código:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="ex: 12345"
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textDefinir}>Nova senha:</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry
          placeholder="*******"
        />
        <View style={styles.textBox}>
          <Text style={styles.textDefinir}>Repetir senha:</Text>
          <TextInput
            style={styles.textInputt}
            secureTextEntry
            placeholder="*******"
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.buttonDefinir}
      >
        <Text style={styles.textButton}>Redefinir senha</Text>
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
