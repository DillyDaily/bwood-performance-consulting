import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Button, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editPost } from '../../actions/posts.actions';
import TopNav from '../TopNav';
import Title from '../Title';
import Footer from '../Footer';
import { Field, reduxForm } from 'redux-form';

class EditPost extends Component {  
  editOnePost = (values) => { 
    console.log('edit form values: ', values);
    this.props.editPost(values)
  }
  
  render () {
    console.log('props from EDIT POST: ', this.props)
    const { handleSubmit } = this.props
    // this.props.editPost(values)

    return (
      <div>
        <TopNav />      
        <Title />
        <Container style={{marginTop: 30}}>
        <Form onSubmit={handleSubmit(this.editOnePost)}>
          <FormGroup row>
            <Label for="title">Title</Label>
            <Col sm={10}>
            <Field
              name="title"
              component="input" 
              type="text"
              onChange={(e) => this.setState({title: e.target.value})}
            />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="blog_content">Content</Label>
            <Col sm={10}>
            <Field
              name="blog_content"
              component="input" 
              type="textarea"
              onChange={(e) => this.setState({blog_content: e.target.value})}
            />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="image">Image URL</Label>
            <Col sm={10}>
            <Field
              name="image"
              component="input" 
              type="text"
              onChange={(e) => this.setState({image: e.target.value})}
            />
            </Col>
          </FormGroup>
          <Button color="primary" type="submit">Submit</Button>
        </Form>
      </Container>
      <Footer />
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editPost: bindActionCreators(editPost, dispatch)
  }
}

function mapStateToProps(state, props) {
  return {
    initialValues: state.posts.filter(post => post.id == props.match.params.id)[0]
  }
}

EditPost = reduxForm({
  form: 'edit_post'
})(EditPost)

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);