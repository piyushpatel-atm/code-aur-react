import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement=React.createElement('a',{href:'www.google.com',target:'_blank'},'click me')

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>,
    reactElement
)
