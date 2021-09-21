import React, { useEffect } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import ReviewCard from './ReviewCard'
import { LoadReviews } from '../store/actions/ReviewActions'

const mapStateToProps = ({ reviewState }) => {
  return { reviewState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: () => dispatch(LoadReviews())
  }
}

function ReviewList(props) {


  useEffect(() => {
    props.fetchReviews()
  }, [])

  return (
    <div className="grid">
      <div className="reviews">
        <Container>
          <h2 className="rev_head">Reviews</h2>
          {props.reviewState.reviews.map((review) => (
            <ReviewCard
              key={review._id}
              id={review._id}
              rating={review.rating}
              description={review.description}
              // del_path={'remove-review'}
            />
          ))}
        </Container>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList)
