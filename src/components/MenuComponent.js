import React from "react";
import { Card, CardImg, CardImgOverlay } from "reactstrap";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <h1>{dish.name} </h1>
      </CardImgOverlay>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-l mt-3">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row mt-3">{menu}</div>
      </div>
    </div>
  );
};

export default Menu;
