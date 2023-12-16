import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './main.css'

// const anotherElement = (
//   <a href="https://google.com" target='__blank'> visit Google </a>
// )

const reactElement = React.createElement(
  'a',
  { 'href': 'https://facebook.com', 'target': '_blank' },
  'Click to open'
);

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement   
)
