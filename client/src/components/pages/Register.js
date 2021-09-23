import React, { useState } from 'react'
import { RegisterUser } from '../../services/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const iState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function Register(props) {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(iState)
    props.history.push('/')
  }

  return (
    <div className="register-sect">
      <Container>
        <h1>CREATE AN ACCOUNT</h1>
      </Container>
      <Container>
        <Form className="register-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={handleChange} name="username" type="text" placeholder="John Smith" value={formValues.username} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={handleChange} name="email" type="email" placeholder="example@example.com" value={formValues.email} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handleChange} type="password" name="password" value={formValues.password} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control onChange={handleChange} type="password" name="confirmPassword" value={formValues.confirmPassword} required/>
          </Form.Group>
          <Button type="submit" disabled={!formValues.email || (!formValues.password || formValues.confirmPassword !== formValues.password)}>Register</Button>
        </Form>
      </Container>
    </div>
  )
}