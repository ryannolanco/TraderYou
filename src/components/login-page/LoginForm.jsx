import React, { useState } from 'react'
import { Form } from 'react-router-dom'

const initialFormData = {
  email: "",
  password: "",
}
const LoginForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default LoginForm
