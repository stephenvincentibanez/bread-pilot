import React from 'react';
import Booking from './Booking'
import Live from './Live'
import Notfound from './Notfound'
import Home from './Home'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Router>
                <div>
                <ul className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/booking">Booking</Link>
                    <Link to="live">Live</Link>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/booking" component={Booking} />
                    <Route path="/live" component={Live} />
                    <Route component={Notfound} />
                </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Navbar;
