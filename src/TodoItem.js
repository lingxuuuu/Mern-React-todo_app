import React from 'react'

const TodoItem = (props) => {
    return (
        <div>
            <input 
                type='checkbox' 
                checked = {props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <span>To do List: {props.item.text}</span>
        </div>
    )
}

export default TodoItem