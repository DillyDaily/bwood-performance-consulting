import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';
import { deleteMessage } from '../actions/messages.actions';

const OneMessage = (props) => {
  let { id, first_name, last_name, message_content, email } = props.message
  return (
     
      <div className="blogContainer">
      <Row>
        <Col sm="6">
          <Card className="blogCard">
            <CardBody>
            <CardTitle>From: { first_name } { last_name }</CardTitle>
            <CardText>Message: { message_content }</CardText>
            <CardText>{ first_name }'s Email: { email }</CardText>
              <Button size="lg" onClick={() => props.deleteMessage(id)}><strong> X </strong> Replied </Button>
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
function mapDispatchToProps(dispatch) {
  return {
    deleteMessage: bindActionCreators(deleteMessage, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneMessage)