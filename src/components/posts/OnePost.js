import React from 'react';
import TopNav from '../TopNav';
import Title from '../Title';
import Footer from '../Footer';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { connect } from 'react-redux';

const OnePost = (props) => {
  let { title, content, image } = props.post
  return (
    <div>
      <TopNav />
      <Card>
        <CardImg top width="100%" src={image} alt="Blog Image" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{content}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Title />
     <Footer />
    </div>
  )
}

function mapStateToProps(state, props) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(OnePost)