import React from "react";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Layout.css";

const layout = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default layout;
