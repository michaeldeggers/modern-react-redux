// Import the react and react-dom libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create a react component
const App = () => {
    const labelText = 'Enter Name:'
    const buttonText = { text: 'CLick Me!' }
    const style = { backgroundColor: 'blue', color: 'white' }

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={style}>{buttonText.text}</button>
        </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))
