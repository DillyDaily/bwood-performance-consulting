import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from '../../actions/posts.actions';
import TopNav from '../TopNav';
import Title from '../Title';
import Footer from '../Footer';

class AddEditPost extends Component {
  state = {
    title: '',
    blog_content: '',
    image: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPost(this.state)
    this.props.history.push('/blog')
  }

  render () {
    return (
      <div>
      <TopNav />      
      <Title />
      <Container style={{marginTop: 30}}>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            id="title"
            value={this.state.title}
            onChange={(e) => this.setState({title: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label for="blog_content">Content</Label>
          <Input
            type="text"
            id="blog_content"
            value={this.state.blog_content}
            onChange={(e) => this.setState({blog_content: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input
            type="text"
            id="image"
            value={this.state.image}
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
    addPost: bindActionCreators(addPost, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddEditPost);