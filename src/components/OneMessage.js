import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import '../App.css';

const OneMessage = (props) => {
  let { first_name, last_name, message_content, email } = props.message
  return (
     
      <div className="blogContainer">
      <Row>
        <Col sm="6">
          <Card className="blogCard">
            <CardBody>
            <CardTitle>From: { first_name } { last_name }</CardTitle>
            <CardText>Message: { message_content }</CardText>
            <CardText>{ first_name }'s Email: { email }</CardText>
              <Button>Reply</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
        
      </div>
    
  )
}

function mapStateToProps(state, props) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, null)(OneMessage)