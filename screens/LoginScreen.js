import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/login', { email, password });
      if (response.data.success) {
        navigation.navigate("Dashboard");
      } else {
        alert("Invalid credentials");
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
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
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
