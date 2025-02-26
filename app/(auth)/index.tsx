import { useCallback } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";

import { TextField, Button } from "@/components/common";
import { SocialLogin } from "@/components/login";
import { useAuth } from "@/hooks/useAuth";


const Index = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = useCallback(() => {
    login();
  }, [login]);

  const handleSignupClick = useCallback(() => {
    router.push("/signup");
  }, [login]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>{"Welcome to Liquid"}</Text>
      <Text style={styles.description}>Please sign in with tour account</Text>
      <TextField
        label={"Email Id"}
        placeholder={"Enter Email Id"}
        onChangeText={(text) => console.log(text)}
      />
      <TextField
        label={"Password"}
        placeholder={"Enter Password"}
        inputType={"password"}
        onChangeText={(text) => console.log(text)}
      />
      <Text style={styles.forgotPassword}>{"Forgot Password?"}</Text>
      <Button label="Sign In" onClick={handleLogin} />

      <SocialLogin />

      <Text onPress={handleSignupClick} style={styles.signupText}>
        {"Don't Have an Account yet?"}
        <Text style={styles.signupLink}>{" Create New"}</Text>
      </Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: "#F7F8FB",
    padding: 15,
    paddingTop: "20%",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 25,
  },
  description: {
    textAlign: "center",
    color: "#A8ABB5",
    marginBottom: 30,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    marginBottom: 20,
    color: "#6D6F75",
  },
  signupText: {
    textAlign: "center",
    color: "#A8ABB5",
    marginTop: 20,
    fontWeight: "500",
    fontSize: 13,
  },
  signupLink: { color: "#0618A3" },
});
