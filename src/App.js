import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/HeaderComponent';
import Main from './components/MainComponent'
class App extends Component {
 
  render(){

    return(
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    )
  }

}


export default App;
