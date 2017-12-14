import React, { Component } from 'react';
import './App.css';
import Admin from './components/Admin';
import Messages from './components/Messages';
import AddPost from './components/posts/AddPost';
import EditPost from './components/posts/EditPost';
import AllPosts from './components/posts/AllPosts';
import AdminAllPosts from './components/posts/AdminAllPosts';
import OnePost from './components/posts/OnePost';
import AdminOnePost from './components/posts/AdminOnePost';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from './actions/posts.actions';
import { getTestimonials } from './actions/testimonials.actions';
import { getMessages } from './actions/messages.actions';

class App extends Component {
  componentDidMount() {
    this.props.getPosts()
    this.props.getTestimonials()
    this.props.getMessages()
  }

  render() {
    return (
      <div className="App"> 
       
        <Router>
          <div>
            <Switch>
              {/* USERS */}
              <Route exact path="/" component={ Home }/>
              <Route exact path="/services" component={ Services }/>
              <Route exact path="/testimonials" component={ Testimonials }/>
              <Route exact path="/contact" component={ Contact }/>
              <Route exact path="/blog" component={ AllPosts }/>
              {/* ADIMIN */}
              <Route exact path="/admin" component={ Admin }/>
              <Route exact path="/admin/messages" component={ Messages }/>
              <Route exact path="/admin/blog" component={ AdminAllPosts }/>
              <Route exact path="/admin/blog/new" component={ AddPost }/>
              <Route exact path="/admin/blog/edit/:id" component={ EditPost }/>
            </Switch>
          </div>
        </Router>


      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: bindActionCreators(getPosts, dispatch),
    getTestimonials: bindActionCreators(getTestimonials, dispatch),
    getMessages: bindActionCreators(getMessages, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);

