import { useEffect, useState } from "react";

import { FundsData, SpendingGoal, UserData } from "@/types";

export const useFetchData = () => {
  const [fundsData, setFundsData] = useState<FundsData | null>(null);
  const [spendingGoals, setSpendingGoals] = useState<SpendingGoal[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setFundsData({
        availableFunds: "$3,234",
        month: "Month",
        amount: "$3,234",
      });

      setSpendingGoals([
        {
          category: "Food & Drinks",
          amount: "$2,000",
          progress: {
            current: "$460",
            total: "$500",
          },
        },
      ]);

      setUserData({
        greeting: "Hello, John!",
        welcomeMessage: "Welcome to your financial insight.",
        profileImage: require("../assets/images/pp.jpg"),
      });
    }, 1000);
  }, []);

  return { fundsData, spendingGoals, userData };
};
