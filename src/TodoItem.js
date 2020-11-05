import React from 'react'

const TodoItem = (props) => {

    const completedStyle = {
        fontStyle: 'italic',
        color: 'grey',
        textDecoration: 'line-through'
    }
    return (
        <div>
            <input 
                type='checkbox' 
                checked = {props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <span style={props.item.completed? completedStyle : null}>To do List: {props.item.text}</span>
        </div>
    )
}

export default TodoItem