import React from 'react'
import todosData from './todosData'
import TodoItem from './TodoItem'


//functional based components
//functional based components pass the props in the () and call the props - {props.whatever}
/*const App = () => {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)
  return (
    <div>
      {todoItems}
    </div>
  )
}
*/

//handling events in React
/*
let handleClick = () => {
  return (
    console.log('I was clicked')
  )
}

let handleEvent = () => {
  return (
    <div>
      <img onMouseOver={() => console.log('Hovered!')}
       src='https://static01.nyt.com/images/2019/04/06/opinion/06warzel-new/06warzel-new-superJumbo.png?quality=90&auto=webp' />
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

//change state:
class changeState extends React.Component {
  constructor(){
  super()
  this.state={
    count: 0
  }
  //bind the setState 
  this.handleClick = this.handleClick.bind(this)
}
  //handle click in a method, just like constructor and render 
  handleClick () {
     this.setState((prevState) => {
         return {
           //anytime you write a state that has setState, you need to bind the setState with the App
           count: prevState.count + 1
         }
     })
  }
  
  render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Changed</button> 
      </div>
          //when method is part of the class, we need to add .this
         )
     }
}
*/

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  
    console.log('changed', id)
  }

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div>
        {todoItems}
     </div>
    )
  }
}

//below codes are class functional components examples

/*class UseClassBaseFunctionalExample extends React.Component {
  render () {
    
    return (
      <div>
        <Header username='Ling X' />
        <Greeting />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {

    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

class Greeting extends React.Component {
  render () {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours <12) {
      timeOfDay = 'morning'
    } else if (hours >= 12 && hours <17){
      timeOfDay = 'afternoon'
    } else {
      timeOfDay = 'night'
    }
    return (
        <p>Good {timeOfDay} to you, sir or madam!</p>
    )
  }
}


//class based components will pass the props in return - {this.props.whatever}
class AppExample extends React.Component {

  yourMethodHere () {
    // ****
  }

  render() {
    //here is where you setup your style object, logit, conditional rendering and so on...
    const style = this.yourMethodHere()

    return (
        <div>
          <h1>Code goes here</h1>
        </div>
    )
  }
}

*/


//React state example:
/*
class UseStateExample extends React.Component {
  constructor() {
    super ()
    this.state = {
      answer: "Yes"
    }
  }
  render () {
    return (
      <div>
        <h1>State is very import to learn? {this.state.answer}</h1>
        <Childcomponent answer={this.state.answer} />
      </div>
    )
  }
}

// another example of state
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "Sally",
      age: 13
    }
  }
 

  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}


class App extends React.Component {
  constructor (){
    super()
    this.state = {
    isLoggedIn: true
    }

  }
  render (){
    let wordDisplay
    if (this.state.isLoggedIn === true) {
      wordDisplay = 'in'
    } else {
      wordDisplay = 'out'
    }

    return (
      <div>
        <h1>You are currently logged {wordDisplay}</h1>
      </div>
    )
  }
}
*/

export default App