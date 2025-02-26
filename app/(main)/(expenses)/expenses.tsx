import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Expenses() {
  const router = useRouter();

  const expenses = [
    { id: "1", title: "Groceries", amount: "$50" },
    { id: "2", title: "Rent", amount: "$500" },
    { id: "3", title: "Electricity", amount: "$60" },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Expenses</Text>
      {expenses.map((expense) => (
        <View key={expense.id} style={{ marginVertical: 10 }}>
          <Text>{expense.title} - {expense.amount}</Text>
          <Button title="View Details" onPress={() => router.push(`expenses/${expense.id}`)} />
        </View>
      ))}
    </View>
  );
}

