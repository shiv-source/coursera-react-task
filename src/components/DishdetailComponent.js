import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  Row,
  Col,
  Label,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModel: false,
      isModelOpen: false,
    };

    this.toggleModel = this.toggleModel.bind(this);
  }

  toggleModel() {
    this.setState({ toggleModel: !this.state.toggleModel });
    this.setState({ isModelOpen: !this.state.isModelOpen });
    console.log(this.state.toggleModel);
  }

  handleSubmit(value) {
    this.props.postComment(
      this.props.dishId,
      value.rating,
      value.author,
      value.comment
    );
  }

  render() {
    return (
      <div>
        <div className="mb-3 ml-3">
          <Button
            onClick={this.toggleModel}
            outline
            color="white"
            style={{ border: "2px solid black" }}
          >
            <span>
              <i className="fa fa-pencil"> </i> Submit Comment
            </span>
          </Button>
        </div>
        <div>
          <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
            <ModalHeader toggle={this.toggleModel}>Submit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
                <Row>
                  <Col>
                    <Label htmlFor="rating">Rating</Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Control.select
                      model=".rating"
                      name="rating"
                      className="form-control"
                      id=".rating"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label htmlFor="author"> Your Name </Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Control.text
                      model=".author"
                      name="author"
                      className="form-control"
                      placeholder="Your Name"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                        required: "Required",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Label htmlFor="comment"> Comment </Label>
                    <Control.textarea
                      model=".comment"
                      name="comment"
                      className="form-control"
                      rows="6"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button color="primary"> Submit </Button>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

function RenderDish({ dish }) {
  return (

    <FadeTransform
    in
    transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
    }}>
    <Card className="col-12 col-md-5 m-2 mt-3">
      <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}></CardImg>
      <CardTitle>
        {" "}
        <h2>{dish.name}</h2>
      </CardTitle>
      <CardText>{dish.description}</CardText>
    </Card>
    </FadeTransform>
  );
}

function RenderComments({ comments, postComment, dishId }) {
  const userComment = comments.map((comment) => {
    
    return (

      <Stagger in>
      <div key={comment.id}>
        <CardBody>
        <Fade in>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author} ,{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </p>
          </Fade>
        </CardBody>
      </div>
      </Stagger>
    );
  });
  return (
    <div>
      <div>{userComment}</div>
      <CommentForm dishId={dishId} postComment={postComment} />
    </div>
  );
}

const DishDetail = (props) => {
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
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }

  const selectedDish = () => {
    const dish = props.dish;
    const comments = props.comments;
    if (dish) {
      return (
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="row">
            <RenderDish dish={dish} />
            <Card className="col-6 col-md-5 m-2 mt-3">
              <RenderComments
                comments={comments}
                postComment={props.postComment}
                dishId={props.dish.id}
              />
            </Card>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return <div className="container">{selectedDish()}</div>;
};
export default DishDetail;
