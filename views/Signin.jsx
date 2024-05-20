import { View, Text, SafeAreaView, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Signin() {
  const navigation = useNavigation();
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  

  const onLongin = () => {
    fetch("https://6561fb1edcd355c083246fec.mockapi.io/user")
      .then((response) => response.json())
      .then((data) => {        
        
        
        for (let i = 0; i < data.length; i++) {
          if (data[i].gmail === gmail && data[i].password === password) {
            console.log("login succesful!");
            navigation.navigate("App");
            return;
          }
        }
        console.log("Login failed");

      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={{ fontSize: 30 }}>signin</Text>
      </View>

      {/* input email */}
      <View style={{ marginTop: 30, marginLeft: 45 ,marginBottom:20}}>
        <Text style={{ fontSize: 20 }}>Email or Phone number</Text>
      </View>

      <View
        style={{
          alignItems: "center",
          marginHorizontalH: "20%",
          marginBottom: 30,
        }}
      >
        <TextInput
          placeholder="Gmail"
          placeholderTextColor={"gray"}
          onChangeText={(text) => setGmail(text)}
          
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "78%",
          }}
        />
      </View>


      <View
        style={{
          alignItems: "center",
          marginHorizontalH: "20%",
          marginBottom: 30,
        }}
      >
        <TextInput
          placeholder="Password"
          placeholderTextColor={"gray"}
          secureTextEntry={true}// an pasword
          onChangeText={(text) => setPassword(text)}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "78%",
          }}
        />
      </View>


      <View>
        <Pressable
          onPress={onLongin}
          style={{
            backgroundColor: "blue",
            marginHorizontal: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("Register");
          }}
          style={{
            marginHorizontal: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderWidth: 1,
            borderColor: "blue",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20 }}>
            Register
          </Text>
        </Pressable>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 50,
          }}
        >
          <Text>---------Or----------</Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("App");
          }}
          style={{
            marginHorizontal: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderWidth: 1,
            borderColor: "blue",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20 }}>
            Continue with Facebook
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderWidth: 1,
            borderColor: "blue",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20 }}>
            Continue with Google
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderWidth: 1,
            borderColor: "blue",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20 }}>
            Continue with Apple
          </Text>
        </Pressable>

        <Pressable></Pressable>
      </View>
    </SafeAreaView>
  );
}
