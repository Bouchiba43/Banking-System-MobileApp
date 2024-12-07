import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to your Dashboard</Text>
      <Button
        title="View Transaction History"
        onPress={() => navigation.navigate("Transaction History")}
      />
      <Button
        title="Transfer Funds"
        onPress={() => navigation.navigate("Fund Transfer")}
      />
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
    marginBottom: 20,
  },
});

export default DashboardScreen;
