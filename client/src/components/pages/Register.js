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
    // console.log(e.target.name)
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    console.log(formValues)
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
    <div className="signin col">
      <div className="card-overlay centered">
        <Container>
          <Form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={handleChange} name="username" type="text" placeholder="John Smith" value={formValues.username} required/>
              </Form.Group>
              {/* <label htmlFor="name">Username</label> */}
              {/* <input
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="John Smith"
                value={formValues.username}
                required
              /> */}
            </div>
            <div className="input-wrapper">
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleChange} name="email" type="email" placeholder="example@example.com" value={formValues.email} required/>
              </Form.Group>
              {/* <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              /> */}
            </div>
            <div className="input-wrapper">
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} type="password" name="password" value={formValues.password} required/>
              </Form.Group>
              {/* <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              /> */}
            </div>
            <div className="input-wrapper">
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control onChange={handleChange} type="password" name="confirmPassword" value={formValues.confirmPassword} required/>
              </Form.Group>
              {/* <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                required
              /> */}
            </div>
            <Button type="submit" disabled={!formValues.email || (!formValues.password && formValues.confirmPassword === formValues.password)}>Sign In</Button>
          </Form>
        </Container>
      </div>
    </div>
  )
}