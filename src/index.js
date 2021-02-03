import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Booking from './components/Booking'
import Live from './components/Live'
import Notfound from './components/Notfound'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <ul>
          <Link to="/">Home</Link>
          <Link to="/booking">Booking</Link>
          <Link to="live">Live</Link>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/booking" component={Booking} />
        <Route path="/live" component={Live} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
    <App routing={routing}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
