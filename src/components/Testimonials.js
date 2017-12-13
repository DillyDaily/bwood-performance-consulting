import React, { Component } from 'react';
import { connect } from 'react-redux';
import OneTestimonial from './OneTestimonial';
import TopNav from '../components/TopNav';
import Title from '../components/Title';
import Footer from '../components/Footer';

class Testimonials extends Component {
  render () {
    let theTestimonials = this.props.testimonials.map(testimonial => <OneTestimonial key={testimonial.id} testimonial={testimonial} />)
    return (
      <div> 
         <TopNav />
         <Title />
         {theTestimonials}
         <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    testimonials: state.testimonials
  }
}

export default connect (mapStateToProps)(Testimonials)