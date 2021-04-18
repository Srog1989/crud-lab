import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} />
        <Reviews reviewss={this.props.reviewss} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}
const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: text => dispatch({ type: "ADD_REVIEW", text }),
  deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id})
})

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)
