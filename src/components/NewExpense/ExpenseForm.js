import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const [formInputsValidity, setFormInputsValidity] = useState({
        title: true,
        amount: true,
        date: true
    });

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitleIsValid = enteredTitle.trim() !== '';
        const enteredAmountIsValid = enteredAmount.trim() !== '' && enteredAmount > 0;
        const enteredDateIsValid = enteredDate.trim() !== '';

        setFormInputsValidity({
            title: enteredTitleIsValid,
            amount: enteredAmountIsValid,
            date: enteredDateIsValid
        });

        const formIsValid =
            enteredTitleIsValid &&
            enteredAmountIsValid &&
            enteredDateIsValid;

        if (!formIsValid) {
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const titleControlClasses = `new-expense__control ${formInputsValidity.title ? '' : 'invalid'}`;
    const amountControlClasses = `new-expense__control ${formInputsValidity.amount ? '' : 'invalid'}`;
    const dateControlClasses = `new-expense__control ${formInputsValidity.date ? '' : 'invalid'}`;

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className={titleControlClasses}>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className={amountControlClasses}>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className={dateControlClasses}>
                <label>Date</label>
                <input type='date' min='2019-01-01' step='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;