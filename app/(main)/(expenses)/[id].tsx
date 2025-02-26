import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ExpenseDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Expense Details</Text>
      <Text>Expense ID: {id}</Text>
    </View>
  );
}
