import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { POSTER_PATH } from '../globals'
import 'bootstrap/dist/css/bootstrap.min.css'

function MovieCard(props) {
  return (
    <Container className="Moviecard" className="d-block w-50">
      <br />
      <Row xs={1} md={1} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="holder.js/100px160"
                src={`${POSTER_PATH}${props.backdrop_path}`}
                alt="Poster"
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
