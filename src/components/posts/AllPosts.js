import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
import OnePost from './OnePost';

class AllPosts extends Component {
  render () {
    console.log('Props from ALL POSTS: ', this.props)
    let thePosts = this.props.posts.map(post => <OnePost key={post.id} post={post} />)
    return (
      <div> 
        {thePosts}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(AllPosts)