import React, { createContext, useReducer } from 'react';

// import Reducer
import Reducer  from './Reducer';

// create initial state
const initialState = {
    transactions: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children })=>{

    const [state, dispatch] = useReducer(Reducer, initialState);

    //Actions to Reducer
    function delTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }


    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions, 
            delTransaction,
            addTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    )
}