import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { SpendingGoal } from "@/types";

type SpendingGoalsProps = {
  spendingGoals: SpendingGoal[];
};

export const SpendingGoals: React.FC<SpendingGoalsProps> = ({
                                                              spendingGoals,
                                                            }) => {
  return (
    <View style={styles.spendingGoals}>
      <Text style={styles.spendingGoalsTitle}>{"Spending Goals"}</Text>
      {spendingGoals.map((goal, index) => (
        <View key={index} style={styles.spendingGoalItem}>
          <View style={styles.goalIcon}>
            <Ionicons name="fast-food-outline" size={34} color="#0618A3" />
          </View>
          <View style={styles.goalText}>
            <Text style={styles.goalCategory}>{goal.category}</Text>
            <Text style={styles.goalAmount}>{goal.amount}</Text>
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressAmount}>{goal.progress.current}</Text>
            <Text style={styles.progressTotal}>
              {"of " + goal.progress.total}
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${(parseFloat(goal.progress.current.replace("$", "")) / parseFloat(goal.progress.total.replace("$", ""))) * 100}%`,
                },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  spendingGoals: {
    height: "100%",
    width: "90%",
    alignItems: "flex-start",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: "#fff",
    padding: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  spendingGoalsTitle: {
    fontWeight: "600",
    fontSize: 15,
    color: "#000",
    marginBottom: 10,
  },
  spendingGoalItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    gap: 10,
    marginBottom: 15,
  },
  goalIcon: {
    height: 50,
    width: 50,
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F5FE",
  },
  goalText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: 50,
    width: "70%",
  },
  goalCategory: {
    fontWeight: "600",
    fontSize: 15,
    color: "#000",
  },
  goalAmount: {
    fontWeight: "400",
    fontSize: 12,
    color: "#A3ABD9",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
  },
  progressAmount: {
    fontWeight: "600",
    fontSize: 15,
    color: "#3A3C43",
    textAlign: "left",
  },
  progressTotal: {
    fontWeight: "400",
    fontSize: 12,
    color: "#7B7D88",
  },
  progressBar: {
    width: "100%",
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#E45C64",
  },
});
