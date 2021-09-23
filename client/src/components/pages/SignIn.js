import React, { useState } from 'react'
import { SignInUser } from '../../services/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function SignIn(props) {
  const [formValues, setFormValues] = useState({ username: '', password: '' })
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ username: '',password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    props.history.push('/')
  }

  return (
    <div className="signin col">
      <h1>SIGN IN</h1>
      <div className="card-overlay centered">
        <Container>
          <Form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={handleChange} name="username" type="text" placeholder="example username" value={formValues.username} required/>
              </Form.Group>
            </div>
            <div className="input-wrapper">
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} type="password" name="password" value={formValues.password} required/>
              </Form.Group>
            </div>
            <Button type="submit" disabled={!formValues.username || !formValues.password}>Sign In</Button>
          </Form>
        </Container>
      </div>
    </div>
  )
}
