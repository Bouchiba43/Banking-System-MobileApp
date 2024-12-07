import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignup = async () => {
    const payload = {
      username: username,
      email: email,
      password: password
    };

    try {
      const response = await axios.post('http://10.0.1.186:8000/auth/register', payload);
      if (response.status === 200) {
        navigation.navigate("Login");
      } else {
        alert("Signup failed");
        console.log("Signup failed", response.data);
      }
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        // The request was made, but the server responded with a status code outside of the range of 2xx
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something else happened while setting up the request
        console.error("Error setting up request:", error.message);
      }
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
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
      <Button title="Sign Up" onPress={handleSignup} />
      <Text
        style={styles.loginLink}
        onPress={() => navigation.navigate("Login")}
      >
        Already have an account? Login
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
  loginLink: {
    marginTop: 10,
    color: "blue",
  },
});

export default SignupScreen;
