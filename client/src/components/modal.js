import { Modal, Button, Form, Row, Col, FloatingLable } from 'react-bootstrap'
import { React, useState } from 'react'

function MyVerticallyCenteredModal(props) {
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

        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Movie Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="input" placeholder="Movie Title" />
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
                <Form.Control as="textarea" rows={3} />
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
                  />
                  <Form.Check
                    inline
                    label="2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="3"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="4"
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label="5"
                    name="group1"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                  <Form.Check
                    inline
                    label="6"
                    name="group1"
                    type={type}
                    id={`inline-${type}-6`}
                  />
                  <Form.Check
                    inline
                    label="7"
                    name="group1"
                    type={type}
                    id={`inline-${type}-7`}
                  />
                  <Form.Check
                    inline
                    label="8"
                    name="group1"
                    type={type}
                    id={`inline-${type}-8`}
                  />
                  <Form.Check
                    inline
                    label="9"
                    name="group1"
                    type={type}
                    id={`inline-${type}-9`}
                  />
                  <Form.Check
                    inline
                    label="10"
                    name="group1"
                    type={type}
                    id={`inline-${type}-10`}
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
