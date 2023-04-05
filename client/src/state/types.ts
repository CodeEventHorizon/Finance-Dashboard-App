export interface ExpensesByCategory {
  salaries: string;
  supplies: string;
  services: string;
}

export interface Month {
  id: string;
  month: string;
  revenue: string;
  expenses: string;
  nonOperationalExpenses: string;
  operationalExpenses: string;
}

export interface Day {
  id: string;
  date: string;
  revenue: string;
  expenses: string;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: string;
  totalProfit: string;
  totalRevenue: string;
  totalExpenses: string;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: string;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}
