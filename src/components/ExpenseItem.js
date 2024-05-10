import React, { useContext } from 'react';
import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);
    
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        }); 
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });  
    
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td><IoIosAddCircle size='2.2em' color="green" onClick={event=> increaseAllocation(props.name)}></IoIosAddCircle></td>
        <td><IoIosRemoveCircle size='2.2em' color="red" onClick={event=> decreaseAllocation(props.id)}></IoIosRemoveCircle></td>
        </tr>
    );
};

export default ExpenseItem;
