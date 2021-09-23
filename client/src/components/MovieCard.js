import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { POSTER_PATH } from '../globals'

function MovieCard(props) {
  return (
    // <Card>
    //   <Card.Body>
    //     <p>Movie: {props.name}</p>
    //     <img src={`${POSTER_PATH}${props.backdrop_path}`} alt="poster" />
    //     <p>Overview: {props.overview}</p>
    //     {/* <p>Genre: {props.genre}</p> */}
    //   </Card.Body>
    // </Card>
    <Container>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="holder.js/100px160"
                src={`${POSTER_PATH}${props.backdrop_path}`}
                alt="poster"
              />
              <Card.Body>
                <h2>{props.name}</h2>
                <Card.Text>
                  <p>{props.overview}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MovieCard
