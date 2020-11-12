import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <hr />

            <ul className="list">
                <li className="income-plus">
                    Income 1 
                    <span>+$500</span>
                    <button className="del-btn">X</button>
                </li>
                <li className="expense-minus">
                    Expense 1 
                    <span>-$200</span>
                    <button className="del-btn">X</button>
                </li>
            </ul>
        </div>
    )
}
