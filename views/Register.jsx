import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Pressable, Alert } from "react-native";

const Register = () => {
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const onRegister = () => {
        if (password !== confirmPassword) {
            console.log("Password not match");
            return;
        }
        fetch("https://6561fb1edcd355c083246fec.mockapi.io/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                gmail: gmail,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
        


    }





    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ marginTop: 100, marginBottom: 100 }}>
                <Text>Register</Text>
            </View>

            <View>
                <TextInput placeholder="Gmail"
                    onChangeText={(text) => setGmail(text)}

                    style={{ padding: 10, borderWidth: 0.5, borderColor: "gray", borderRadius: 10 }}
                />
                <TextInput placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}// an pasword
                    style={{ padding: 10, borderWidth: 0.5, borderColor: "gray", borderRadius: 10, marginTop: 20 }}
                />
                <TextInput placeholder="Confirm Password"
                    onChangeText={(text) => setConfirmPassword(text)}
                    secureTextEntry={true}// an pasword
                    style={{ padding: 10, borderWidth: 0.5, borderColor: "gray", borderRadius: 10, marginTop: 20 }}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Pressable style={{ padding: 10, backgroundColor: "blue", borderRadius: 10 }}
                    onPress={onRegister}
                >
                    <Text style={{ color: "white" }}>Register</Text>
                </Pressable>

            </View>

            {/* quay tro lai login */}
            {/* <View style={{ marginTop: 20 }}>
                <Pressable
                    onPress={() => { navigation.goBack() }}
                >
                    <Text>Back to login</Text>
                </Pressable>
            </View> */}

        </View>
    )

}
export default Register;