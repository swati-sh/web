import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Retail from "./retail/Retail";
import FutureTech from "./tech/FutureTech";
import DashBoard from "./dashboard/DashBoard";
import Contact from "./contacts/Contact";
import Products from "./products/Products";
import Partner from "./partners/Partner";
import Header from "./Header/index";
import Imagination from "./imagination/Imagination";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" exact component={FutureTech} />
          <Route path="/1" component={DashBoard} />
          <Route path="/2" component={Contact} />
          <Route path="/3" component={Products} />
          <Route path="/4" component={Retail} />
          <Route path="/5" component={Partner} />
          <Route path="/6" component={Imagination} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
