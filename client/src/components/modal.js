import { Modal, Button, Form, Row, Col, FloatingLable } from 'react-bootstrap'
import { React, useState } from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
function MyVerticallyCenteredModal(props) {
  const [newReview, setNewReview] = useState({
    username: '',
    title: '',
    description: '',
    rating: null
  })

  const onSubmit = async () => {
    const res = await axios.post(`${BASE_URL}/create-review`, newReview)
  }

  const handleChangeTitle = (event) => {
    setNewReview({ ...newReview, title: event.target.value })
  }
  const handleChangeDescription = (event) => {
    setNewReview({ ...newReview, description: event.target.value })
  }

  const handleChangeRating = (event) => {
    setNewReview({ ...newReview, rating: event.target.value })
  }
  console.log(newReview)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Movie Title
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Create Review</h4>

        <Form onSubmit={onSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Signed in as:
            </Form.Label>
            <Col sm="10">
              <Form.Control plaintext readOnly Value={props.user} />
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Movie Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="input"
                placeholder="Movie Title"
                onChange={handleChangeTitle}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Review
            </Form.Label>
            <Col sm={10}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label placeholder="enter Review here">
                  Enter Review Here
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={handleChangeDescription}
                />
              </Form.Group>
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Rate Movie
              </Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="1"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    value={1}
                    onChange={handleChangeRating}
                  />
                  <Form.Check
                    inline
                    label="2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    value={2}
                    onChange={handleChangeRating}
                  />
                  <Form.Check
                    inline
                    label="3"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                    value={3}
                    onChange={handleChangeRating}
                  />
                  <Form.Check
                    inline
                    label="4"
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                    value={4}
                    onChange={handleChangeRating}
                  />
                  <Form.Check
                    inline
                    label="5"
                    name="group1"
                    type={type}
                    id={`inline-${type}-5`}
                    value={5}
                    onChange={handleChangeRating}
                  />
                  <Form.Check
                    inline
                    label="6"
                    name="group1"
                    type={type}
                    id={`inline-${type}-6`}
                    value={6}
                    onChange={handleChangeRating}
                  />
                  <Form.Check
                    inline
                    label="7"
                    name="group1"
                    type={type}
                    id={`inline-${type}-7`}
                    value={7}
                    onChange={handleChangeRating}
                  />
                  <Form.Check
                    inline
                    label="8"
                    name="group1"
                    type={type}
                    id={`inline-${type}-8`}
                    value={8}
                    onChange={handleChangeRating}
                  />
                  <Form.Check
                    inline
                    label="9"
                    name="group1"
                    type={type}
                    id={`inline-${type}-9`}
                    value={9}
                    onChange={handleChangeRating}
                  />
                  <Form.Check
                    inline
                    label="10"
                    name="group1"
                    type={type}
                    id={`inline-${type}-10`}
                    value={10}
                    onChange={handleChangeRating}
                  />
                </div>
              ))}
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Submit Review</Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyVerticallyCenteredModal
