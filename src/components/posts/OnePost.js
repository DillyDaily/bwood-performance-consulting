import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import '../../App.css';

const OnePost = (props) => {
  let { title, blog_content, image } = props.post
  return (
     
      <div className="blogContainer">
      <Row>
        <Col sm="6">
          <Card className="blogCard">
            <CardImg top width="100%" src={image} alt="Blog Image" />
            {/* <CardBody>
              <CardTitle></CardTitle>
              <CardText></CardText>
              <Button>Read More</Button>
            </CardBody> */}
          </Card>
        </Col>
        <Col sm="6">
          <Card className="blogContent" body>
            <CardTitle>{title}</CardTitle>
            <CardText>{blog_content}</CardText>
          </Card>
        </Col>
      </Row>
        
      </div>
    
  )
}

function mapStateToProps(state, props) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(OnePost)