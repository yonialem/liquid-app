import { useCallback } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import { Button } from "@/components/common";

export default function Signup() {
  const router = useRouter();

  const handleBackToLogin = useCallback(
    () => router.replace("/(auth)"),
    [router],
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Button label="Back to Login" onClick={handleBackToLogin} />
    </View>
  );
}
