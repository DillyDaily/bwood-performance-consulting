import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import '../../App.css';
import GoIconPack from 'react-icons/lib/go/trashcan';
import { bindActionCreators } from 'redux';
import { editPost } from '../../actions/posts.actions';
import { deletePost } from '../../actions/posts.actions';
import { Link } from 'react-router-dom';

const AdminOnePost = (props) => {
  let { id, title, blog_content, image } = props.post
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

             <Button tag={Link} to={`/admin/blog/edit/${id}`}> EDIT </Button>
            
            {/* LINK to (/delete/blog/:id) */}
             <Button onClick={() => props.deletePost(id)} >  DELETE </Button> 

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

function mapDispatchToProps(dispatch) {
  return {
    editPost: bindActionCreators(editPost, dispatch),
    deletePost: bindActionCreators(deletePost, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminOnePost)