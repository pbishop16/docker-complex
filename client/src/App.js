import React, {
  useEffect,
  useState
} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import About from './About';
import logo from './logo.svg';
import './App.css';

const LinkStyle = {
  border: '2px solid blue',
  flex: '1 1 auto',
  fontWeight: '800',
  padding: '4px 0',
};

export const App = () => {
  const [
    data,
    setData,
  ] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get('/api/values/all');

      setData(data);
    })();
  });

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div
        style={{
          width: '400px',
          margin: '0 auto',
        }}
      >
        <BrowserRouter>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              alignContent: 'center',
              width: '100%',
              marginBottom: '10px',
            }}
          >
            <Link style={LinkStyle} to='/'>Home</Link>
            <Link style={LinkStyle} to='/about'>About</Link>
          </div>
          <Switch>
            <Route path='/' exact render={() => <Home data={data} />} />
            <Route path='/about' render={() => <About />} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
