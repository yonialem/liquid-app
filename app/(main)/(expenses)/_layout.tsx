import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="expenses" options={{ title: "Expenses" }} />
      <Stack.Screen name="[id]" options={{ title: "Expense Details" }} />
    </Stack>

  );
}
