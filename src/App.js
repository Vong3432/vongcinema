import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import { HashRouter as Router, Switch, Route} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Movie from './pages/Movie'
import News from './pages/News'
import Contact from './pages/Contact'
import Detail from './pages/Detail';

function App() {  

  return (
    <div className="App">
      <Router basename={'/vongcinema'}>    
        <TopBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movie' exact component={Movie} />
          <Route path='/news' exact component={News} />
          <Route path='/contact' exact component={Contact} />
          <Route path="/m/:movieid" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
