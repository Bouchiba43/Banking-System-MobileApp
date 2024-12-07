import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {

    const payload = {
      username: username,
      password: password
    };
    
    try {
      const response = await axios.post('http://10.0.1.186:8000/auth/login', payload);
      if (response.data.success) {
        navigation.navigate("Dashboard");
      } else {
        console.log("Login failed", response.data);
        alert("Invalid credentials",);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text
        style={styles.signupLink}
        onPress={() => navigation.navigate("Signup")}
      >
        Don't have an account? Signup
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  signupLink: {
    marginTop: 10,
    color: "blue",
  },
});

export default LoginScreen;
