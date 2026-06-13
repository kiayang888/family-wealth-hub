export type Member = {
  id: number;
  name: string;
  role: string;
  status: "Active" | "New Member" | "Goal Reached" | "Needs Encouragement";
  savingsGoal: number;
  currentSavings: number;
  investmentGoal: number;
  currentInvestments: number;
  monthlyTarget: number;
  streakMonths: number;
  notes: string;
};

export type Meeting = {
  id: number;
  title: string;
  date: string;
  summary: string;
  attendees: string[];
  topics: string[];
  actionItems: string[];
  nextMeeting: string;
};

export type Motivation = {
  id: number;
  category: string;
  title: string;
  content: string;
};

export const familySummary = {
  totalSaved: "$11,430",
  totalInvested: "$44,490",
  thisMonthAdded: "$1,000",
  participationRate: "83%",
  activeMembers: 20,
  nextMeeting: "Mar 21",
};

export const familyGoals = [
  {
    id: 1,
    title: "2026 Family Investment Gain as of March 9, 2026",
    target: 12000,
    current: 9170,
  },
  {
    id: 2,
    title: "2026 Family Savings Goal",
    target: 25000,
    current: 9170,
  },
  {
    id: 3,
    title: "2030 Family Investing Goal",
    target: 200000,
    current: 44490,
  },

];

export const monthlyChallenge =
  "Each family member saves or invests at least $100 this month before spending on non-essentials.";

export const members: Member[] = [
  {
    id: 1,
    name: "Foua Yang",
    role: "President",
    status: "Active",
    savingsGoal: 5000,
    currentSavings: 3100,
    investmentGoal: 12000,
    currentInvestments: 7200,
    monthlyTarget: 600,
    streakMonths: 8,
    notes: "Leading family check-ins and helping keep meeting notes organized.",
  },
  {
    id: 2,
    name: "Linda Yang",
    role: "Secretary",
    status: "Active",
    savingsGoal: 3000,
    currentSavings: 3400,
    investmentGoal: 10000,
    currentInvestments: 10150,
    monthlyTarget: 500,
    streakMonths: 10,
    notes: "A strong example of consistency. Great person to feature in monthly encouragement posts.",
  },
  {
    id: 3,
    name: "Billy Yang",
    role: "Treasurer",
    status: "Active",
    savingsGoal: 4000,
    currentSavings: 1800,
    investmentGoal: 8000,
    currentInvestments: 3400,
    monthlyTarget: 350,
    streakMonths: 5,
    notes: "Making steady progress and could be highlighted for monthly budgeting wins.",
  },
  {
    id: 4,
    name: "Chue Lee Yang",
    role: "Member",
    status: "Active",
    savingsGoal: 2500,
    currentSavings: 700,
    investmentGoal: 5000,
    currentInvestments: 1100,
    monthlyTarget: 250,
    streakMonths: 2,
    notes: "Has been working on cutting back on dining out and could share tips on meal prepping in the group chat.",
  },
  {
    id: 5,
    name: "Kaying Y Hong",
    role: "Member",
    status: "Active",
    savingsGoal: 2000,
    currentSavings: 450,
    investmentGoal: 3000,
    currentInvestments: 650,
    monthlyTarget: 150,
    streakMonths: 1,
    notes: "Has been a great motivator for the family and often shares helpful articles and tips in the group chat.",
  },
  {
    id: 6,
    name: "Kia Yang",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: "Would benefit from personal encouragement and small-step monthly goals.",
  },
  {
    id: 7,
    name: "Doua Thao",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: "Has been keeping track of investment performance and could share insights on how to stay motivated during market fluctuations.",
  },
    {
    id: 8,
    name: "Eh Yang",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: "Needs encouragement to stay consistent and could benefit from setting smaller, more achievable monthly goals to build confidence.",
  },
      {
    id: 9,
    name: "Faith Siabdawb Vue",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: "",
  },
  {
    id: 10,
    name: "Matthew Vue",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: "",
  },
 {
    id: 11,
    name: "Jessica K Yang & Alan Thao",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: "A couple who has been working together on their financial goals and could share tips on how to support each other in the family group chat.",
  },
  {
    id: 12,
    name: "Nan Bhome Yang",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: " Has been a consistent saver and could share tips on how to stay disciplined with saving and investing in the family group chat.",
  },
 {
    id: 13,
    name: "Nan Ibmong Yang",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: " Has been a consistent saver and could share tips on how to stay disciplined with saving and investing in the family group chat.",
  },
  {
    id: 14,
    name: "Leja S Thao & Mitchell Yang",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: " A couple who has been working together on their financial goals and could share tips on how to support each other in the family group chat.",
  },
  {
    id: 15,
    name: "Lawrence K Thao",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: "Has been a consistent saver and could share tips on how to stay disciplined with saving and investing in the family group chat.",
  },
  {
    id: 16,
    name: "Lucy L Thao",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: "Could use encouragement to stay consistent and could benefit from setting smaller, more achievable monthly goals to build confidence.",
  },
 {
    id: 17,
    name: "Frances Lo",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: " Has been a consistent saver and could share tips on how to stay disciplined with saving and investing in the family group chat.",
  },
  {
    id: 18,
    name: "Kyle Vang",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: " Has been a consistent saver and could share tips on how to stay disciplined with saving and investing in the family group chat.",
  },
  {
    id: 19,
    name: "Christine Lo",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: " Has been a consistent saver and could share tips on how to stay disciplined with saving and investing in the family group chat.",
  },
  {
    id: 20,
    name: "Scott Vang",
    role: "Member",
    status: "Active",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: " ",
  },
  {
    id: 21,
    name: "Kong Peng Yang & Paying Vang",
    role: "Member",
    status: "Inactive",
    savingsGoal: 6000,
    currentSavings: 1980,
    investmentGoal: 9000,
    currentInvestments: 2950,
    monthlyTarget: 400,
    streakMonths: 4,
    notes: "Has been inactive for several months and may need a personal check-in to understand any challenges they are facing and how the family can support them in getting back on track with their savings and investing goals.",
  },

];

export const meetings: Meeting[] = [
  {
    id: 1,
    title: "March Family Finance Meeting",
    date: "March 2, 2026",
    summary: "Reviewed February contributions and agreed to increase automatic transfers.",
    attendees: ["Kia", "Doua", "Kaying", "Jessica", "Nan Bhome", "Nan Ibmong", "Leja & Mitchell", "Lawrence", "Lucy", "Frances", "Kyle", "Christine", "Scott"],
    topics: [
      "Review monthly savings totals",
      "Discuss beginner investment accounts",
      "Set Q2 contribution targets",
    ],
    actionItems: [
      "Each member updates March contribution target",
      "Share one investing article with the family group",
      "Prepare emergency fund update for next meeting",
    ],
    nextMeeting: "March 12, 2026",
  },

];

export const motivations: Motivation[] = [
  {
    id: 1,
    category: "Mindset",
    title: "Small amounts still matter",
    content:
      "A family that saves steadily can build more than a family that waits for the perfect moment. Progress beats perfection.",
  },
  {
    id: 2,
    category: "Challenge",
    title: "Pay yourself first",
    content:
      "Before buying anything optional this month, move money into savings or investments first — even if it is only a small amount.",
  },
  {
    id: 3,
    category: "Encouragement",
    title: "We are building for the next generation",
    content:
      "Every disciplined choice today gives children and grandchildren a stronger starting point tomorrow.",
  },
  {
    id: 4,
    category: "Reminder",
    title: "Consistency wins",
    content:
      "Not every month will be big, but consistent monthly contributions often matter more than occasional large deposits.",
  },
];

export const resources = [
  {
    id: 1,
    category: "Budgeting",
    title: "Start with a simple monthly budget",
    description:
      "Give every dollar a job so saving becomes automatic instead of optional.",
    points: [
      "List income first",
      "Set a fixed savings amount",
      "Track wants vs needs",
    ],
  },
  {
    id: 2,
    category: "Emergency Fund",
    title: "Build a cash safety cushion",
    description:
      "An emergency fund helps protect investments from being sold too early.",
    points: [
      "Begin with a $1,000 starter goal",
      "Aim for 3–6 months of expenses",
      "Keep it in a safe, accessible account",
    ],
  },
  {
    id: 3,
    category: "Investing",
    title: "Keep investing simple",
    description:
      "Long-term consistency and diversification usually beat chasing hype.",
    points: [
      "Contribute regularly",
      "Think long term",
      "Learn before taking extra risk",
    ],
  },
];
