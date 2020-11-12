import React from 'react'

export const IncomeExpense = () => {
    return (
        <div className="inc-exp-cont">
            <div id="border">
                <h4>INCOME</h4>
                <p className="money plus">+$0.00</p>
            </div>
            <div>
                <h4>EXPENSE</h4>
                <p className="money minus">-$0.00</p>
            </div>
        </div>
    )
}
