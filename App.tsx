import React from "react";
import { StatusBar, SafeAreaView } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import Routes from "./src/routes"

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex:0, backgroundColor: '#1b98e0' }}/>
      <StatusBar 
      barStyle="dark-content"
      />
      <Routes/>
    </NavigationContainer>
  );
};
