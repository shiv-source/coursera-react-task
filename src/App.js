import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
