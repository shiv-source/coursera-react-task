import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

function RenderMenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
const Menu = (props) => {
  const message = () => {
    if (props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (props.errMess) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>{props.dishes.errMess}</h4>
            </div>
          </div>
        </div>
      );
    }
  };
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-l mt-3">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="row mt-3">{message()}</div>
        <div className="row mt-3">{menu}</div>
      </div>
    </div>
  );
};

export default Menu;
