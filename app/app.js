import React from 'react'
import loadHome from 'bundle-loader?lazy!./home.js'
import Bundle from './bundle'
import { BrowserRouter, Route } from 'react-router-dom'

const Home = () => (
  <Bundle load={loadHome}>
    {(Home) => Home ? <Home/> : <div></div>}
  </Bundle>
)

export default class App extends React.Component {
  render() {
    return <BrowserRouter>
      <Route path="/" component={Home}/>
    </BrowserRouter>
  }
}


