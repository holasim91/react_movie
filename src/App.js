import React from 'react'
import About from './routes/About'
import Home from './routes/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Detail from './routes/Detail'

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path = '/' exact={true} component={Home} /> 
      <Route path='/about' component={About}/>
      <Route path='/movie/:id' component={Detail} />
    </BrowserRouter>
  )
}

export default App
