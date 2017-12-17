import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Button, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editPost } from '../../actions/posts.actions';
import AdminTopNav from '../AdminTopNav';
import Title from '../Title';
import Footer from '../Footer';
import { Field, reduxForm } from 'redux-form';

class EditPost extends Component {  
  editOnePost = (values) => { 
    console.log('edit form values: ', values);
    this.props.editPost(values)
    this.props.history.push('/admin/blog')
  }
  
  render () {
    console.log('props from EDIT POST: ', this.props)
    const { handleSubmit } = this.props

    return (
      <div>
        <AdminTopNav />      
        <Title />
        <Container style={{marginTop: 30, marginBottom: 30}}>
        <Form onSubmit={handleSubmit(this.editOnePost)}>
          <FormGroup row>
            <Label style={{ fontSize: '25px' }} for="title">Title</Label>
           
            <Field
              style={{ fontSize: '25px', width: '50' }}
              name="title"
              component="input" 
              type="text"
              onChange={(e) => this.setState({title: e.target.value})}
            />
           
          </FormGroup>
          <FormGroup row>
            <Label style={{ fontSize: '25px' }} for="blog_content">Content</Label>
           
            <Field
              style={{ fontSize: '25px' }}
              name="blog_content"
              component="input" 
              type="textarea"
              onChange={(e) => this.setState({blog_content: e.target.value})}
            />
           
          </FormGroup>
          <FormGroup row>
            <Label style={{ fontSize: '25px' }} for="image">Image URL</Label>
           
            <Field
              style={{ fontSize: '25px' }}
              name="image"
              component="input" 
              type="text"
              onChange={(e) => this.setState({image: e.target.value})}
            />
           
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