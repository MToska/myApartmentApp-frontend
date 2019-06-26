import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layouts/Header";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Menu from './components/Menu/Menu';
import MainView from './components/layouts/MainView';
import Ranking from './components/layouts/Ranking';
import Search from './components/layouts/Search';
import Calculator from './components/layouts/Calculator';
import InvestmentDetails from './components/layouts/InvestmentDetails';

import Radium, { StyleRoot } from 'radium';

function App() {
    return (
        <StyleRoot>
            <div className="App">
                <Router>
                    <Header />
                    <Menu />
                    <Switch>
                        <Route exact path="/" component={MainView} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/calculator" component={Calculator} />
                        <Route exact path="/ranking" component={Ranking} />
                        <Route exact path="/search" component={Search} />
                        <Route path="/investments" component={InvestmentDetails} />
                    </Switch>
                </Router>
            </div>
        </StyleRoot>
    );
}

export default App;
