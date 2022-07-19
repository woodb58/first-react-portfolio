import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="type your message" />
      </form>
    </div>
  )
}

export default Form
