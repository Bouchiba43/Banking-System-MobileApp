import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";

const FundTransferScreen = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleTransfer = async () => {
    if (amount && recipient) {
      try {
        const response = await axios.post('http://yourbackendurl.com/api/transfer', { amount, recipient });
        if (response.data.success) {
          Alert.alert("Success", `Transferred $${amount} to ${recipient}`);
        } else {
          Alert.alert("Error", "Transfer failed");
        }
      } catch (error) {
        console.error("Transfer error:", error);
        Alert.alert("Error", "Something went wrong. Please try again.");
      }
    } else {
      Alert.alert("Error", "Please fill out all fields");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter recipient's name"
        value={recipient}
        onChangeText={setRecipient}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Transfer Funds" onPress={handleTransfer} />
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
});

export default FundTransferScreen;