import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import './scss/main.scss'

class App extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            
            <Layout>
           
            <Home />

            </Layout>
            
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )