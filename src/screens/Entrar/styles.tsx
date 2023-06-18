import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding:30,
    flex: 1,
    backgroundColor: "#9DC08B",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerDoctor:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    marginTop: -20,
  },
  textBv:{
    fontSize: 25,
    padding: 2,
    paddingLeft: 10,
    textAlign: "center",
    color: "black",
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginTop: 20,
  },
  containerLista: {
    width:"100%",
    height: 100, 
  },
  item: {
    backgroundColor: '#609966',
    height:50,
    width:250,
    margin: 10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',
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
  },
  containerItem:{
    width:"100%",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  textButtton: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    textDecorationLine: "underline", 
  },
  conteinerIcon:{
    position:"absolute",
    zIndex: 999,
    right: 10,
  }
});
