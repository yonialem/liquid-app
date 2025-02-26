import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../hooks/useAuth";

export default function Index() {
  const router = useRouter();
  const { login } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text>Login</Text>
      <TextInput placeholder="Email" style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      <Button title="Login" onPress={() => login()} />
      <Button title="Sign Up" onPress={() => router.push("signup")} />
    </View>
  );
}
