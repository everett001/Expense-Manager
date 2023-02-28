import { useState } from "react";
import Expenses from "./components/Expeneses/Expenses";
import Header from "./components/Header/Header";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Coffee',
    amount: 6,
    date: new Date(2023, 0, 11),
  },
  {
    id: 'e2',
    title: 'New Clothes',
    amount: 99.99,
    date: new Date(2023, 0, 22)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 11, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 50,
    date: new Date(2022, 6, 12),
  },
  {
    id: 'e5',
    title: 'Lunch',
    amount: 10,
    date: new Date(2023, 1, 17),
  },
  {
    id: 'e6',
    title: 'Phone Bill',
    amount: 18.57,
    date: new Date(2023, 1, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
