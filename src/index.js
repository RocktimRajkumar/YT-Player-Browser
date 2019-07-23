import React from 'react';
import ReactDOM from 'react-dom';

// Create a new Component. That produce some HTML
const App = () => {
    return <div>Hi!</div> // JSX
}



// Take the component and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));