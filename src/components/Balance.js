import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction=> transaction.amount);
    parseInt(amounts)

    const accumulator = (summation, num)=> summation += num

    const total = amounts.reduce(accumulator, 0).toFixed(2);
    return (
        <div>
            <h4>YOUR BALANCE</h4>
    <h1>${ total }</h1>
        </div>
    )
}
