import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function FichaTecnica({ route }) {
  const navigation: any = useNavigation();
  const pacienteId = route.params.pacienteId;

  const [dataNasc, setNasc] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [condicionamento, setCondicionamento] = useState("");
  const [abdominal, setAbdominal] = useState("");
  const [atividade, setAtividade] = useState("");
  const [atualmente, setAtualmente] = useState("");
  const [dificuldade, setDificuldade] = useState("");
  const [correr, setCorrer] = useState("");
  const [dores, setDores] = useState("");
  const [sente, setSente] = useState("");
  const [musculo, setMusculo] = useState("");
  const [razao, setRazao] = useState("");
  const [osseo, setOsseo] = useState("");
  const [equilibrio, setEquilibrio] = useState("");
  const [data, setData] = useState({});

  const storeData = async () => {
    const newData = {
      pacienteId,
      dataNasc,
      peso,
      altura,
      condicionamento,
      abdominal,
      atividade,
      atualmente,
      dificuldade,
      correr,
      dores,
      sente,
      musculo,
      razao,
      osseo,
      equilibrio,
    };
    const response = await AsyncStorage.getItem("@vidaleve:ficha");
    const previousData = response ? JSON.parse(response) : [];

    const data = [...previousData, newData];

    await AsyncStorage.setItem("@vidaleve:ficha", JSON.stringify(data));

    alert("Adicionado com sucesso!");
    navigation.goBack();
  };
  async function handleFetchData() {
    const response = await AsyncStorage.getItem("@vidaleve:ficha");
    const data = response ? JSON.parse(response) : [];
      if (response) {
        const filteredArray = data.find((item) => item.pacienteId === pacienteId);
        filteredArray ? setData(filteredArray) : setData({});
        return;
      }
  }
  useEffect(() => {
    handleFetchData();
  }, []);

  const handleTextChange = (text) => {
    const numericText = text.replace(/\D/g, "");

    if (numericText.length <= 2) {
      setNasc(numericText);
    } else if (numericText.length <= 4) {
      setNasc(`${numericText.slice(0, 2)}/${numericText.slice(2)}`);
    } else {
      setNasc(
        `${numericText.slice(0, 2)}/${numericText.slice(
          2,
          4
        )}/${numericText.slice(4, 8)}`
      );
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.containerLogo}
          source={require("../../assets/logo.png")}
        />
        {Object.keys(data).length === 0 ? (
          <>
            <View style={styles.textBox}>
              <Text style={styles.textName}>Data Nascimento:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleTextChange}
                value={dataNasc}
                placeholder="00/00/0000"
                keyboardType="number-pad"
                maxLength={10}
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textEmail}>Peso:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setPeso(text)}
                value={peso}
                placeholder="peso atual"
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textCpf}>Altura:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setAltura(text)}
                value={altura}
                placeholder="altura atual"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textNumero}>
                Qual seu nível de condicionamento:
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setCondicionamento(text)}
                value={condicionamento}
                placeholder="de 0 a 10"
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textBairro}>Circunferência Abdominal:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setAbdominal(text)}
                value={abdominal}
                placeholder="Circ. Abdominal"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textRua}>Já praticou atividade física:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setAtividade(text)}
                value={atividade}
                placeholder="sim ou não"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textNumeroC}>
                Pratica atividade física atualmente:
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setAtualmente(text)}
                value={atualmente}
                placeholder="sim ou não"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textNumeroC}>
                Normalmente qual a sua dificuldade para abaixar-se, ajoelhar-se
                ou curvar-se:
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setDificuldade(text)}
                value={dificuldade}
                placeholder="Resposta"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textNumeroC}>
                Normalmente qual a sua dificuldade para correr, levantar objetos
                pesados, praticar esportes ou realizar trabalhos pesados:
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setCorrer(text)}
                value={correr}
                placeholder="Resposta"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textNumeroC}>
                Nesse último mês, você teve dores no peito quando não estava
                fazendo atividade física:
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setDores(text)}
                value={dores}
                placeholder="Resposta"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textNumeroC}>
                Você sente dor no peito ao fazer atividade física:
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setSente(text)}
                value={sente}
                placeholder="Resposta"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textNumeroC}>
                Você tem algum problema no músculo esquelético:
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setMusculo(text)}
                value={musculo}
                placeholder="Resposta"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textNumeroC}>
                Você tem conhecimento de alguma outra razão que contraindique a
                prática de atividade física:
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setRazao(text)}
                value={razao}
                placeholder="Resposta"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textNumeroC}>
                Você tem algum problema ósseo ou articular, por exemplo: costas,
                joelho ou quadril, que possa piorar a prática de atividades
                físicas:
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setOsseo(text)}
                value={osseo}
                placeholder="Resposta"
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.textNumeroC}>
                Você perdeu o equilibrío em virtude de tonturas ou perdeu a
                consciência quando estava praticando atividades físicas:
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setEquilibrio(text)}
                value={equilibrio}
                placeholder="Resposta"
              />
            </View>
          </>
        ) : (
            <View style={styles.containerInfo}>           
            <Text style={styles.textInfo}>Data Nascimento: {data.dataNasc}</Text>
            <Text style={styles.textInfo}>Peso: {data.peso}</Text>
            <Text style={styles.textInfo}>Altura: {data.altura}</Text>
            <Text style={styles.textInfo}>Condicionamento 0 a 10: {data.condicionamento}</Text>
            <Text style={styles.textInfo}>Abdominal: {data.abdominal}</Text>
            <Text style={styles.textInfo}>Já praticou atividade física: {data.atividade}</Text>
            <Text style={styles.textInfo}>Pratica atividade física atualmente: {data.atualmente}</Text>
            <Text style={styles.textInfo}>Dificuldade para ajoelhar-se e abaixar: {data.dificuldade}</Text>
            <Text style={styles.textInfo}>Dificuldade para correr: {data.correr}</Text>
            <Text style={styles.textInfo}>Você teve dores no peito no último mês: {data.dores}</Text>
            <Text style={styles.textInfo}>Você sente dor no peito: {data.sente}</Text>
            <Text style={styles.textInfo}>Você tem algum problema no músculo esquelético: {data.musculo}</Text>
            <Text style={styles.textInfo}>Você tem conhecimento de alguma outra razão que contraindique a
                prática de atividade física: {data.razao}</Text>
            <Text style={styles.textInfo}>Você tem algum problema nas articulações: {data.osseo}</Text>
            <Text style={styles.textInfo}>Você perdeu equilibrio: {data.equilibrio}</Text>
            </View> 
        )}
        {Object.keys(data).length === 0 && (
          <TouchableOpacity
            onPress={() => storeData()}
            style={styles.buttonCriar}
          >
            <Text style={styles.textButton}>Adicionar Anamnese</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => navigation.goBack("")}
          style={styles.buttonRetornar}
        >
          <Text style={styles.textButton}>Retornar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
