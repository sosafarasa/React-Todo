import React from "react"

function Todo(props) {
    return (
        <div className = "todo">
            {props.item.task}
        </div>
    );
    
};

export default Todo;