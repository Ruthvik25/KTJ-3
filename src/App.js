import React, { Component } from 'react';
import './App.css';

import Layout from "./components/Layout";
import TA from "./components/TA";

class App extends Component {

  render () {
    return (
      <div>
        <Layout>
          <TA></TA>
        </Layout>
      </div>
    );
  }
}


export default App;
