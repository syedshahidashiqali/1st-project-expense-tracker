import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add new transaction</h3>
            <hr />
            <form>
                <div className="form">
                    <label htmlFor="text">
                        Description
                    </label>
                    <br />
                    <input type="text" 
                    placeholder="Enter description of transaction...">
                    </input>
                </div>
                <div className="form">
                    <label htmlFor="amount">
                        Amount in Dollars
                        <br />
                        (negative: expense, positive: income)
                        </label>
                    <br />
                    <input type="number" 
                    placeholder="Enter Amount...">
                    </input>
                </div>
                <button className="add-btn">Add transaction</button>
            </form>
        </div>
    )
}
