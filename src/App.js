import React, { Component } from "react";
import Layout from "./Components/Layout";
import "./Components/Charts/LineChart";
import "./db/mongoose";
import "./App.css";

class App extends Component {
  render() {
    return <Layout />;
  }
}

export default App;
