import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "./views/HomeScreen";

import { Entypo } from "@expo/vector-icons";
import { Text, View } from "react-native";
import SearchScreen from "./views/SearchScreen";


const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    backgroundColor: "white",
    paddingTop: 10,
  },
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? "#88b77b" : "black"}
                />
                <Text style={{ fontSize: 12, color: "#16247d" }}>Home</Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo
                  name="magnifying-glass"
                  size={24}
                  color={focused ? "#88b77b" : "black"}
                />
                <Text style={{ fontSize: 12, color: "#16247d" }}>Search</Text>
              </View>
            );
          },
        }}
      />
      
    </Tab.Navigator>
  );
}
export default MyTabs;