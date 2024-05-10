import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    const { expenses, Currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    if(newBudget > 20000) {
        alert("The value cannot exceed 20000");
        setNewBudget("");
        return;
    }

    
    if(newBudget < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending");
        setNewBudget("");
        return;
    }
    
   
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    
      

    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {Currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>

    );
};
export default Budget;
