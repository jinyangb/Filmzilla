import React, { useState } from 'react'
import { SignInUser } from '../../services/Auth'

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
    props.history.push('/feed')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="example username"
              value={formValues.username}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.username || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
