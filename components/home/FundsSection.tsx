import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { FundsData } from "@/types";

type FundsSectionProps = {
  fundsData: FundsData;
};

export const FundsSection: React.FC<FundsSectionProps> = ({ fundsData }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={["#6D45AE", "#5E4FB2", "#525DB3", "#4C80B8"]}
      style={styles.fundsContainer}
    >
      <View style={styles.fundsContent}>
        <View style={styles.fundsHeader}>
          <Text style={styles.fundsLabel}>{fundsData.availableFunds}</Text>
          <Text style={styles.fundsMonth}>{fundsData.month}</Text>
        </View>
        <Text style={styles.fundsAmount}>{fundsData.amount}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  fundsContainer: {
    width: "100%",
    height: 80,
    padding: 15,
    marginTop: 30,
    borderRadius: 15,
    marginBottom: 30,
  },
  fundsContent: {
    gap: 10,
  },
  fundsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fundsLabel: {
    color: "#A3ABD9",
    fontSize: 12,
    fontWeight: "400",
  },
  fundsMonth: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "400",
  },
  fundsAmount: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
