import React from "react"

function Todo(props) {
    return (
        <div className = "todo">
           <h3> {props.todoItems.task} </h3>
        </div>
    );
    
};

export default Todo;