import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';


export const IncomeExpense = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction=> transaction.amount);

    const accumulator = (summation, num)=> summation += num

    const income = amounts.filter(item => item >= 0).reduce(accumulator, 0).toFixed(2);

    const expense = Math.abs(amounts.filter(item => item <= 0).reduce(accumulator, 0)).toFixed(2);

    
    return (
        <div className="inc-exp-cont">
            <div id="border">
                <h4>INCOME</h4>
    <p className="money plus">${ income }</p>
            </div>
            <div>
                <h4>EXPENSE</h4>
    <p className="money minus">${ expense }</p>
            </div>
        </div>
    )
}
