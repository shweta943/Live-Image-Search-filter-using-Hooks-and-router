import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu.jsx";
import Home from "./Home.jsx";
import Service from "./Service.jsx";
import Search from "./Search.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";


const App=()=>{
    return (
        <>
        <Menu/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/service" component={Service}></Route>
                <Route exact path="/search" component={Search}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                
            </Switch>
        </>
    );
}

export default App;