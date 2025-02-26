import { FC, useMemo, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.buttonContainer}>
      <LinearGradient
        colors={["#D3E7F5", "#D3DEF2", "#D4D9F1"]}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    height: 50,
    marginVertical: 20,
    overflow: "hidden",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
