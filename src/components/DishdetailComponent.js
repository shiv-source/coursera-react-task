import React, { Component } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardImgOverlay,
    CardText,
  } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const dishDetails = this.props.selectedDishData;
    const commentData = () => {
      const comments = this.props.selectedDishData.comments;

      if (comments !== undefined || null) {
        const userData = comments.map((data) => {
          return(
            <CardBody key={data.id} >
              
              <p>{data.comment} </p >
              <p>
                    -- {data.author} ,{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    }).format(new Date(Date.parse(data.date)))}
                  </p>
              
              </CardBody>
          ) 
        });

        return (
          <div>
            <h1 className="mt-3"> Comments </h1>
            {userData}
          </div>
        );
      } else {
        return <div></div>;
      }
    };

    return (
      <div className="row">
         

          <Card className="col-6 col-md-5 m-l mt-3">
            <CardImg src={dishDetails.image} ></CardImg>
            <CardTitle><h1> {dishDetails.name} </h1>  </CardTitle>
            <CardText> <h6> {dishDetails.description} </h6> </CardText>
            <CardText> <h6> Price : $ {dishDetails.price} </h6> </CardText>
            <CardText> {dishDetails.category}</CardText>
            <CardText> <h6> Label :  {dishDetails.label} </h6> </CardText>
          
          </Card>
        
        <Card className="col-6 col-md-5 m-l mt-3">
        {commentData()}
        </Card>
       
      </div>
    );
  }
}

export default Dishdetail;
