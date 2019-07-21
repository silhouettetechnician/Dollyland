import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'

class App extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <h1>Hello</h1>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )