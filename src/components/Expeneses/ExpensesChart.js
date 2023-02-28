import Chart from "../Chart/Chart";

function ExpensesChart(props) {

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        props.chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={props.chartDataPoints}/>
};

export default ExpensesChart;