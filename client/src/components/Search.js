import React from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'

export default function Search({ onChange, value, onSubmit }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={(e) => onSubmit(e)}>
        <Form>
          <Row>
            <Col>
              <Form.Control
                className="text-center"
                name="search"
                type="text"
                value={value}
                placeholder="Search Movies"
                onChange={(e) => onChange(e)}
              />
            </Col>
          </Row>
        </Form>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="outline-dark" size="sm" active>
            Search
          </Button>
        </div>
      </form>
    </div>
  )
}
