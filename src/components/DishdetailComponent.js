import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardText,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedDish = () => {
      const dish = this.props.dish;
      if (dish) {
        const userComment = dish.comments.map((comment) => {
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
        });

        return (
          <div className="row">
            <Card className="col-12 col-md-5 m-2 mt-3">
              <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
              <CardText>{dish.description}</CardText>
            </Card>
            <Card className="col-6 col-md-5 m-2 mt-3">
              <div> {userComment} </div>
            </Card>
          </div>
        );
      } else {
        return <div></div>;
      }
    };

    return <div className="container">
      {selectedDish()}
      </div>;
  }
}

export default DishDetail;
