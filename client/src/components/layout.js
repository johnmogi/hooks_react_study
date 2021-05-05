import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Footer from './footer';
import Header from './header';
import Home from './pages/home';
import Coins from './pages/coins';

function Layout() {
    return (
        <BrowserRouter>

            <div className="Layout container">

                <Header />
                <hr />
                <main>
                    <Switch>
                        <Route path="/home" component={Home} exact />
                        <Route path="/coins" component={Coins} exact />
                        <Redirect from="/" to="/home" exact />
                    </Switch>
                </main>
                <hr />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default Layout;
