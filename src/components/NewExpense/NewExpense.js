import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return <Card className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </Card>
};

export default NewExpense