import ExpeneseItem from "./ExpenseItem";
import './ExpensesList.css';

function ExpensesList(props) {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    let total = 0;
    props.items.forEach(element => {
        total += element.amount;
    });

    return <div>
        <h2 className="total">Total: ${total.toFixed(2)}</h2>
        <ul className="expenses-list">
            {props.items.map(expense => (
                <ExpeneseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    </div>

};

export default ExpensesList;