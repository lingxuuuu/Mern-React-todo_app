import React from 'react';
import ReactDOM from 'react-dom'; //ReateDOM library to render

import App from './App'; // ./ meaning from the current directory, looking for a function called App.js


/*function MyApp() {
    return (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    )
}

               //what to render ,  //where to render
ReactDOM.render( <MyApp />, document.getElementById('root'));  //<MyApp /> is a functional component, it is a self-closing tag here. */

ReactDOM.render ( <App />, document.getElementById('root'));