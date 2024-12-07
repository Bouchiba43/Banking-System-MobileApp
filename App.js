import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import DashboardScreen from "./screens/DashboardScreen";
import TransactionHistoryScreen from "./screens/TransactionHistoryScreen";
import FundTransferScreen from "./screens/FundTransferScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Transaction History" component={TransactionHistoryScreen} />
        <Stack.Screen name="Fund Transfer" component={FundTransferScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
