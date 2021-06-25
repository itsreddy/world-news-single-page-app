import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import World from "../Map/World";
import Loading from "../loading";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from "../News/News";
import Home from "../Home/Home";
import "./Main.css";

function Main() {
  return (
    <div className='Main'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/world/:cid' component={News} />
          <Route path='/world' component={World} />
          <Route path='/loading' component={Loading} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Main;
