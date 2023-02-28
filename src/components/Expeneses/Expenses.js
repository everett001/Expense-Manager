import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    let years = [];

    for (const expense of props.items) {
        let year = expense.date.getFullYear().toString();
        if (!years.includes(year)) {
            years.push(year);
        }
    }
    years.sort().reverse();

    props.items.sort((a, b) => b.date - a.date);

    const [filteredMth, setFilteredMth] = useState('-');
    const [filteredYear, setFilteredYear] = useState(years[0]);

    const filterChangeMthHandler = selectedMth => {
        setFilteredMth(selectedMth);
    }

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        if (filteredMth === '-' && filteredYear === '-') {
            return expense;
        } else if (filteredMth !== '-' && filteredYear === '-') {
            return expense.date.getMonth().toString() === filteredMth;
        } else if (filteredMth === '-' && filteredYear !== '-') {
            return (expense.date.getFullYear().toString() === filteredYear);
        } else {
            return (expense.date.getFullYear().toString() === filteredYear && expense.date.getMonth().toString() === filteredMth);
        }
    });

    const chartData = [
        { id: 0, label: 'Jan', value: 0 },
        { id: 1, label: 'Feb', value: 0 },
        { id: 2, label: 'Mar', value: 0 },
        { id: 3, label: 'Apr', value: 0 },
        { id: 4, label: 'May', value: 0 },
        { id: 5, label: 'Jun', value: 0 },
        { id: 6, label: 'Jul', value: 0 },
        { id: 7, label: 'Aug', value: 0 },
        { id: 8, label: 'Sep', value: 0 },
        { id: 9, label: 'Oct', value: 0 },
        { id: 10, label: 'Nov', value: 0 },
        { id: 11, label: 'Dec', value: 0 },
    ];

    return (
        <Card className="expenses">
            <ExpensesFilter
                mthLabels={chartData} yearsData={years}
                onChangeFilter={filterChangeHandler} selected={filteredYear}
                onChangeMthFilter={filterChangeMthHandler} selectedMth={filteredMth} />
            <ExpensesChart chartDataPoints={chartData} expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
};

export default Expenses;