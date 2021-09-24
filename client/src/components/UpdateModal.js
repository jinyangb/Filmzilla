import react, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Client from '../services'

function UpdateModal(props) {
  const [updateReview, setUpdateReview] = useState({
    description: '',
    rating: null
  })

  const onSubmit = async () => {
    console.log('anything')
    const res = await Client.put(
      `${BASE_URL}/update-review/${props.id}`,
      updateReview
    )
    console.log(res)
  }

  const handleChangeDescription = (e) => {
    setUpdateReview({ ...updateReview, description: e.target.value })
  }

  const handleChangeRating = (e) => {
    setUpdateReview({ ...updateReview, rating: e.target.value })
  }
  console.log(updateReview)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.movie}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Update Review</h4>

        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Reviewed By:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                value={props.user}
                // onChange={handleChangeUser}
              />
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Movie:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="input"
                placeholder="Movie Title"
                plaintext
                readOnly
                value={props.movie}
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
                  Update Review
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  defaultValue={props.description}
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
              <Button type="submit" onClick={onSubmit}>
                Update Review
              </Button>
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

export default UpdateModal
