import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import Home from "../screens/Home";
import EsqueceuSenha from "../screens/EsqueceuSenha";
import DefinirSenha from "../screens/DefinirSenha";
import ContaNova from "../screens/ContaNova";
import Entrar from "../screens/Entrar";
import Perfil from "../screens/Perfil";
import NovoPaciente from "../screens/NovoPaciente";
import FichaTecnica from "../screens/FichaTecnica";



export default function Routes() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
            <Stack.Screen name="DefinirSenha" component={DefinirSenha} />
            <Stack.Screen name="ContaNova" component={ContaNova}/>
            <Stack.Screen name="Entrar" component={Entrar}/>
            <Stack.Screen name="Perfil" component={Perfil}/>
            <Stack.Screen name="NovoPaciente" component={NovoPaciente}/>
            <Stack.Screen name="FichaTecnica" component={FichaTecnica}/>
        </Stack.Navigator>
    );
}