import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Container from 'react-bootstrap/Container'
import ReviewCard from './ReviewCard'

function ReviewList() {
  const [reviews, setReviews] = useState([])
  const [request, changeIt] = useState(false)

  const getReviews = async () => {
    const res = await axios.get(`${BASE_URL}/reviews`)
    setReviews(res.data)
  }

  useEffect(() => {
    getReviews()
  }, [request])
  console.log(reviews)
  return (
    <div className="grid">
      <div className="reviews">
        <Container>
          <h2 className="rev_head">Reviews</h2>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              id={review.id}
              rating={review.rating}
              description={review.description}
              user={review.profile}
              poster={review.poster}
              movie={review.movietitle}
              changeIt={changeIt}
              del_path={'delete-review'}
            />
          ))}
        </Container>
      </div>
    </div>
  )
}

export default ReviewList
