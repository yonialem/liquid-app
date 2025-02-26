export interface FundsData {
  availableFunds: string;
  month: string;
  amount: string;
}

export interface SpendingGoal {
  category: string;
  amount: string;
  progress: {
    current: string;
    total: string;
  };
}

export interface UserData {
  greeting: string;
  welcomeMessage: string;
  profileImage: string;
}
