import React from 'react';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Booking from './Booking'


const Navbar = () => {
    return (
        <Router>
            <Switch>
                <a href="https://breadpilotband.bandcamp.com/">
                    <h3>Music</h3>
                </a>
                <a href="https://breadpilotband.bandcamp.com/merch">
                    <h3>Store</h3>
                </a>
                <Route
                    exact path="/booking"
                    component={Booking}
                    exact
                    render={() => <h3>Booking</h3>}
                />
                <Route
                    to="/live"
                    exact>
                    <h3>Live</h3>
                </Route>
            </Switch>
        </Router>
    );
}

export default Navbar;
