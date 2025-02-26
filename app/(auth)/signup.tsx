import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      <Button title="Sign Up" onPress={() => router.replace("(main)/home")} />
      <Button title="Back to Login" onPress={() => router.push("login")} />
    </View>
  );
}
