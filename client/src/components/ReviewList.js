import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import Container from 'react-bootstrap/Container'
import ReviewCard from './ReviewCard';

function ReviewList() {

  const [reviews, setReviews] = useState([])
  const [request, changeIt] = useState(false)

  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    setReviews(res.data.reviews)
  }

  useEffect(() => {
    getPosts()
  }, [request])

  return (
    <div className='grid'>
      <div className='reviews'>
        <Container>
          <h2 className="rev_head">Reviews</h2>
          {posts.map((result) => (
            <ReviewCard
              key={result._id}
              id={result._id}
              movie={result.movieId}
              user={result.userId}
              rating={result.rating}
              description={result.description}
              request={request}
              changeIt={changeIt}
              del_path={'remove-review'}
            />
          ))}
        </Container>
      </div>
    </div>
  )
}

export default ReviewList;