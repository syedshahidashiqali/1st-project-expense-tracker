import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={ transaction.amount >= 1 ? "income-plus" : "expense-minus" }>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="del-btn" onClick={()=> delTransaction(transaction.id)}>X</button>
        </li>
    )
}
