import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeSreen from './screen/HomeSreen.tsx';
import ProfileScreen from './screen/ProfileScreen.tsx';
import SecondScreen from './screen/SecondScreen.tsx';
import ikon from 'react-native-vector-icons/FontAwesome5.js';


const tabs= createBottomTabNavigator();
const Mainnavigasi= () => {
  return(
    <tabs.Navigator>
    <tabs.Screen 
    name="Home"
     component={HomeSreen}
     options={{
      tabBarIcon: ({color,size}) =>(
        <Icon name= "Folder" color="black" size
      )
     }}/>
    <tabs.Screen name="Profile" component={ProfileScreen}/>
    <tabs.Screen name="Second" component={SecondScreen}/>
    </tabs.Navigator>
  )
}
export default function App() {
return(
  <NavigationContainer>
    <Mainnavigasi/>
  </NavigationContainer>
);
}