import React, { Component } from 'react';
import AdminTopNav from '../AdminTopNav';
import Title from '../Title';
import Footer from '../Footer';
import { connect } from 'react-redux';
import AdminOnePost from './AdminOnePost';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class AdminAllPosts extends Component {
  render () {
    console.log('Props from ALL POSTS: ', this.props)
    let thePosts = this.props.posts.map(post => <AdminOnePost key={post.id} post={post} />)
    return (
      <div> 
         <AdminTopNav />
         <Title />
         <h1 className="manage">Manage Your Blog</h1>
         {/* <div>
         <Button size="lg" tag={Link} to={`/admin/blog/new`}> ADD NEW POST </Button>
         </div> */}
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