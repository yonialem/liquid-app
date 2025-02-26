import { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

type SocialLoginProps = {};

export const SocialLogin: FC<SocialLoginProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.alternativeLoginTextContainer}>
        <View style={styles.separator}></View>
        <Text style={styles.alternativeLoginText}>{"Or login with"}</Text>
        <View style={styles.separator}></View>
      </View>

      <View style={styles.iconContainer}>
        <Image
          source={require("../../assets/images/apple.png")}
          style={styles.iconStyle}
        ></Image>
        <Image
          source={require("../../assets/images/google.webp")}
          style={styles.iconStyle}
        ></Image>
        <Image
          source={require("../../assets/images/instagram.png")}
          style={styles.iconStyle}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", justifyContent: "flex-start", marginTop: 20 },
  alternativeLoginTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  separator: { flex: 1, height: 1, backgroundColor: "#DEE1E6" },
  alternativeLoginText: {
    color: "#A8ABB5",
    paddingHorizontal: 10,
    fontWeight: "500",
    fontSize: 12,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 30,
  },
  iconStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
});
