import { StatusBar } from "expo-status-bar";
import * as AuthSession from "expo-auth-session";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./styles";
import auth from "@react-native-firebase/auth";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@vidaleve:conta");
      const data = value ? JSON.parse(value) : [];
      const filteredArray = data.find((item) => item.email === email);
      if (!filteredArray) {
        Alert.alert("Login", "Usuário ou senha incorreta");
        return;
      }
      if (filteredArray.password === password) {
        navigation.navigate("Entrar", {id:filteredArray.id});
        return;
      }
      Alert.alert("Login", "Usuário ou senha incorreta");
    } catch (e) {}
  };
  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID =
        "729742197658-7spcemjtajfdu5rglv39himkmedgcabq.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@duu/projeto";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      console.log(authUrl);
      const { type, params }: any = await AuthSession.startAsync({ authUrl });
      console.log(type, params);
      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const user = await response.json();
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  }
  // function handleNewAccount() {
  //   setIsLoading(true);
  //   auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(() => Alert.alert("Conta", "Cadastrado com sucesso!"))
  //     .catch((error) => console.log(error))
  //     .finally(() => setIsLoading(false));
  // }
  return (
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require("../../assets/logo.png")} />
      <View style={styles.textBox}>
        <Text style={styles.textLogin}>E-mail:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="exemplo@gmail.com"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textLogin}>SENHA:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          placeholder="*******"
        />
      </View>
      <View>
        {/* <TouchableOpacity onPress={() => navigation.navigate("EsqueceuSenha")}>
          <Text style={styles.textEsqueci}>Esqueceu sua Senha?</Text>
        </TouchableOpacity> */}
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={() => getData()}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ContaNova")}>
        <Text style={styles.textCriar}>Novo por aqui? Inscreva-se!!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
