import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Header, SpendingGoals, FundsSection } from "@/components/home";
import { useFetchData } from "@/hooks/useFetchData";

export default function Index() {
  const { fundsData, spendingGoals, userData } = useFetchData();

  if (!fundsData || !userData) {
    return (
      <ActivityIndicator
        style={{ alignSelf: "center", marginTop: "40%" }}
        size="large"
      />
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#421499", "#3954B9", "#459AAD", "#4395AE"]}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.content}>
            <Header userData={userData} />
            <FundsSection fundsData={fundsData} />
            <Image
              source={require("../../assets/images/graph.png")}
              style={styles.graphImage}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
      <View style={styles.bottomContainer}>
        <SpendingGoals spendingGoals={spendingGoals} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  gradient: {
    width: "100%",
    height: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  safeArea: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 15,
  },
  graphImage: {
    resizeMode: "contain",
    alignSelf: "center",
    height: 250,
    width: "90%",
  },
  bottomContainer: {
    width: "100%",
    height: "33%",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
