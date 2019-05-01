import React from "react";

function TodoForm(props) {
    return (
        <form onSubmit = {props.addNewItem}>
            <input 
                value = {props.task} 
                type= "text" 
                name= "task" 
                placeholder= "Todo task" 
                onChange= {props.changeHandler}/>

            <button type = "submit">Add Item</button>
            <button type = "submit">Erase Completed</button>    
        </form> 
    );
};

export default TodoForm;