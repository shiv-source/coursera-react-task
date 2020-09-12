import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DISHES } from './shared/dishes';
import Menu from './components/MenuComponent'
import Header from './components/HeaderComponent';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES
    }
  }

  render(){

    return(
      <div>
        <Header></Header>
        <Menu dishes = { this.state.dishes } ></Menu>
      </div>
    )
  }

}


export default App;
