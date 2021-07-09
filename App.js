import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Text, View, FlatList, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import ListaDeCompras from "./src/screens/ListaDeCompras";
import ListaDeGastos from "./src/screens/ListaDeGastos";
import MiCuenta from "./src/screens/MiCuenta";

import styles from "./src/utils/styles";

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "NotoSansJP-Light": require("./assets/fonts/NotoSansJP-Light.otf"),
    "NotoSansJP-Regular": require("./assets/fonts/NotoSansJP-Regular.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.screen}>
        <NavigationContainer style={styles.screen}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = "home";
                } else if (route.name === "Lista de gastos") {
                  iconName = "list";
                } else if (route.name === "Mi Cuenta") {
                  iconName = "person";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Home" component={ListaDeCompras} />
            <Tab.Screen name="Lista de gastos" component={ListaDeGastos} />
            <Tab.Screen name="Mi Cuenta" component={MiCuenta} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
