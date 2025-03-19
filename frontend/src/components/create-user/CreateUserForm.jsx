import React from 'react'

const initialUserFormData = {name: "", email: "", password: ""}

const CreateUserForm = () => {
  const [createUserData, setCreateUserData] = useState(initialUserFormData);
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleChange = (e) => {
    setCreateUserData({
      ...createUserData,
      [e.target.id]: e.target.value,
    })
  }

  const handleConfirmChange = (e) => {
    setConfirmPassword(confirmPassword + e.target.value)
  }

  const handleSubmitNewUser = () => {

  }

  return (
    <form onSubmit={handleSubmitNewUser}>
      <label htmlFor='name'>
        Name:
      </label>
      <input id="name" type='text' value={createUserData.name} onChange={handleChange}/>
      <label htmlFor='email'>
        Email:
      </label>
      <input id='email' type='text' value={createUserData.email} onChange={handleChange}/>
      <label htmlFor='password'>
        Password:
      </label >
      <input id='password' type='text' value={createUserData.password} onChange={handleChange}/>
      <label htmlFor='confirm'>
        Confirm Password:
      </label>
      <input id='confirm' type='text' value={confirmPassword} onChange={handleConfirmChange}/>
 
    </form>
  )
}

export default CreateUserForm
