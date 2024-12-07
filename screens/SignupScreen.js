import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://yourbackendurl.com/api/signup', { email, password });
      if (response.data.success) {
        navigation.navigate("Login");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
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
