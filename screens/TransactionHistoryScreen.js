import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      {/* Add your transaction list here */}
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
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default TransactionHistoryScreen;
