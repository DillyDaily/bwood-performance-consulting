import React, { Component } from 'react';
import TopNav from '../TopNav';
import Title from '../Title';
import Footer from '../Footer';
import { connect } from 'react-redux';
import AdminOnePost from './AdminOnePost';

class AdminAllPosts extends Component {
  render () {
    console.log('Props from ALL POSTS: ', this.props)
    let thePosts = this.props.posts.map(post => <AdminOnePost key={post.id} post={post} />)
    return (
      <div> 
         <TopNav />
         <Title />
         {thePosts}
         <Footer />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(AdminAllPosts)