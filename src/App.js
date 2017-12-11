import React, { Component } from 'react';
import './App.css';
import AddEditPost from './components/posts/AddEditPost';
import AllPosts from './components/posts/AllPosts';
import OnePost from './components/posts/OnePost';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from './actions/posts.actions';

class App extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <div className="App"> 
       
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route exact path="/services" component={ Services }/>
              <Route exact path="/testimonials" component={ Testimonials }/>
              <Route exact path="/contact" component={ Contact }/>
              <Route exact path="/blog" component={ AllPosts }/>
              <Route exact path="/blog/:id" component={ OnePost }/>
              <Route exact path="/admin/blog/new" component={ AddEditPost }/>
              <Route exact path="/admin/blog/:id/edit" component={ AddEditPost }/>
            </Switch>
          </div>
        </Router>


      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: bindActionCreators(getPosts, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);

