import { FC, useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type TextFieldProps = {
  placeholder: string;
  label: string;
  inputType?: "text" | "password";
  containerStyle?: object;
  inputStyle?: object;
  labelStyle?: object;
  onChangeText?: (text: string) => void;
};

const PASSWORD = "password";

export const TextField: FC<TextFieldProps> = ({
                                                placeholder,
                                                label,
                                                containerStyle,
                                                inputStyle,
                                                labelStyle,
                                                inputType = "text",
                                                onChangeText,
                                              }) => {
  const isSecure = useMemo(() => inputType === PASSWORD, [inputType]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          onChangeText={onChangeText && onChangeText}
          secureTextEntry={isSecure && !isPasswordVisible}
          placeholder={placeholder}
          placeholderTextColor={"#B5B7C0"}
          style={[styles.input, inputStyle]}
        />
        {isSecure && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.icon}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="#B5B7C0"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: { color: "#ADB0BA", fontWeight: "500", marginBottom: 5, fontSize: 14 },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    height: 45,
    padding: 10,
    width: "100%",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 12,
  },
});
