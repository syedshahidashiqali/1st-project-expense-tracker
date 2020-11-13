import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Transaction } from './Transaction';

export const TransactionHistory = () => {

    // const context = useContext(GlobalContext); // instead of using context.transactions we can destructure
    const { transactions } = useContext(GlobalContext); // so transactions is an array we can loop through it
    // console.log(transactions);
    return (
        <div>
            <h3>Transaction History</h3>
            <hr />

            <ul className="list">
                { transactions.map(transaction => ( <Transaction  key={transaction.id} transaction={transaction} />)) }
            </ul>
        </div>
    )
}
