import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  return (
    <Card className="col-12 col-md-5 m-2 mt-3">
      <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
      <CardTitle>
        {" "}
        <h2>{dish.name}</h2>
      </CardTitle>
      <CardText>{dish.description}</CardText>
    </Card>
  );
}

function RenderComments({ comment }) {
  return (
    <div key={comment.id}>
      <CardBody>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author} ,{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(comment.date)))}
        </p>
      </CardBody>
    </div>
  );
}

const DishDetail = (props) => {
  const selectedDish = () => {
    const dish = props.dish;
    const comments = props.comments;
    if (dish ) {
      const userComment = comments.map((comment) => {
         return <RenderComments comment={comment} />;
       });

      return (
        <div className="row">
          <RenderDish dish={dish} />
          <Card className="col-6 col-md-5 m-2 mt-3">
            <div> {userComment} </div>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/menu">Menu</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
      </Breadcrumb>
      {selectedDish()}
    </div>
  );
};
export default DishDetail;
