import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "TV EMI",
    amount: 5500,
    date: new Date(2021,3,2),
  },

  {
    id: "e2",
    title: "Loan",
    amount: 3500,
    date: new Date(2022,3,2),
  },

  {
    id: "e3",
    title: "Groceries",
    amount: 5560,
    date: new Date(2022,3,15),
  }
];

function App() {
  
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
