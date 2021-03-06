import React from 'react'
import About from './routes/About'
import Home from './routes/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Detail from './routes/Detail'
import ToWatchList from './routes/ToWatchList'
import { ToWatchProvider } from './toWatchContext'

const App = () => {
  return (
    <ToWatchProvider>
      <BrowserRouter> 
        <Navigation />
        <Route path={["/", "/react_movie"]} component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/towatchlist" component={ToWatchList} />
      </BrowserRouter>
      </ToWatchProvider>
  );
}

export default App
