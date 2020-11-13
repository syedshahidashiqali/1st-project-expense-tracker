import React, { useState, useContext } from 'react';


import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e)=>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description,
            amount: +amount
        }


        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <hr />
            <form onSubmit={ onSubmit }>
                <div className="form">
                    <label htmlFor="text">
                        Description
                    </label>
                    <br />
                    <input type="text" 
                    placeholder="Enter description of transaction..."
                    onChange={ (e)=> { setDescription(e.target.value) } } value={ description }>
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
                    placeholder="Enter Amount..."
                    onChange={ (e)=> { setAmount(e.target.value) } } value={ amount }>
                    </input>
                </div>
                <button className="add-btn">Add transaction</button>
            </form>
        </div>
    )
}
