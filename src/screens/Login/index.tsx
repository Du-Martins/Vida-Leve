import { StatusBar } from "expo-status-bar";
import * as AuthSession from "expo-auth-session";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Login({ navigation }) {
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
  return (
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require("../../assets/logo.png")} />
      <View style={styles.textBox}>
        <Text style={styles.textLogin}>E-mail:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="exemplo@gmail.com"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textLogin}>SENHA:</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry
          placeholder="*******"
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("EsqueceuSenha")}>
          <Text style={styles.textEsqueci}>Esqueceu sua Senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
      <Text style={styles.textSessao}>---- Ou inicie a sessão com ----</Text>
      <View style={styles.containerImg}>
        <TouchableOpacity>
          <Image
            style={styles.imgFace}
            source={{
              uri: "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGoogleSignIn()}>
          <Image
            style={styles.imgGoogle}
            source={{
              uri: "https://fulltimeblog.com/wp-content/uploads/2019/05/1024px-Google__G__Logo-1-1000x1000.png",
            }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.textCriar}>Novo por aqui? Inscreva-se!!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
