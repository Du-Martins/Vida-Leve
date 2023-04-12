import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9DC08B",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imgLogo:{
    marginBottom: 20,
  },
  textEsqueciSenha: {
    fontSize: 25,
    color: "black",
    marginTop: 15,
    fontWeight: "bold",
    marginLeft: 3,
    textDecorationLine: "underline",
  },
  textLogin: {
    fontSize: 20,
    color: "#2d2727",
    marginTop: 15,
    fontWeight: "bold",
    marginLeft: 3,
  },
  textBox: {
    width: "78%",
    alignItems: "flex-start",
  },
  textInput: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 8,
    paddingLeft: 10,
    borderRadius: 10,
  },
  buttonLogin: {
    width: "55%",
    backgroundColor: "#609966",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
  },
  textButton: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonVoltar: {
    width: "55%",
    backgroundColor: "#609966",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
  }
});
