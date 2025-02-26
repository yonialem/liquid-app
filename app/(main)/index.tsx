import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../hooks/useAuth";

export default function Index() {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Expense Tracker</Text>
      <Button title="View Expense" onPress={() => router.push("(expenses)")} />
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
}
