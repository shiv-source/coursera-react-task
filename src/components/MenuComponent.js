import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardText,
} from "reactstrap";

import Dishdetail from './DishdetailComponent';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: "",
      name : "hello"
    };
  }

  onSelectedDish(dish){
    this.setState({selectedDish : dish })
    //  console.log(this.state.selectedDish)

  }



  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-l mt-3">
          <Card onClick={ () => this.onSelectedDish(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name } />
            <CardImgOverlay>
              <h1>{dish.name} </h1>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <div className="container">
          <div className="row mt-3">{menu}</div>
          <Dishdetail selectedDishData = { this.state.selectedDish} ></Dishdetail>
        </div>
      
        
      </div>
    );
  }
}

export default Menu;
