import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearchBar } from '../../actions/search.actions';
import { Form, FormGroup, Input } from 'reactstrap';
import OnePost from './OnePost';
import TopNav from '../TopNav';
import Title from '../Title';
import Footer from '../Footer';

class AllPosts extends Component {
  render () {
    console.log('Props from ALL POSTS: ', this.props)
    let thePosts = this.props.posts
    .filter(post => post.title.toLowerCase().includes(this.props.searchBar.toLowerCase()))
    .map(post => <OnePost key={post.id} post={post} />)
    return (
      <div> 
         <TopNav />
         <Title />
         <div> 
            <Form inline >
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <div>
                  <Input 
                    type="search" 
                    className="SearchBar form-control input-sm search-form"
                    placeholder="Search Brand Name" 
                    onChange={(e) => {
                      this.props.updateSearchBar(e.target.value)
                    }}
                      />
                  </div>
                </FormGroup>
              </Form>
            </div>
         {thePosts}
         <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    searchBar: state.searchBar
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateSearchBar: bindActionCreators(updateSearchBar, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)