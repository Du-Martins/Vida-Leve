import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import Home from "../screens/Home";
import EsqueceuSenha from "../screens/EsqueceuSenha";
import DefinirSenha from "../screens/DefinirSenha";


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
        </Stack.Navigator>
    );
}