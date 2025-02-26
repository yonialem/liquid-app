import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { UserData } from "@/types";

type HeaderProps = {
  userData: UserData;
};

export const Header: React.FC<HeaderProps> = ({ userData }) => {
  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image source={userData.profileImage} style={styles.profileImage} />
        <View style={styles.userText}>
          <Text style={styles.userGreeting}>{userData.greeting}</Text>
          <Text style={styles.userWelcome}>{userData.welcomeMessage}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.settingsButton}>
        <Ionicons name="settings-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    resizeMode: "cover",
  },
  userText: {
    height: 50,
    marginHorizontal: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  userGreeting: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  userWelcome: {
    color: "#A3ABD9",
    fontSize: 12,
    fontWeight: "400",
  },
  settingsButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#2D4FAEa0",
    justifyContent: "center",
    alignItems: "center",
  },
});
