import React from "react"


export default function Contact() {
  return (
    <div>
    
      <form className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail">Email address</label>
          <br />
          <input type="email" aria-describedby="emailHelp" />
          <br />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea rows="5"></textarea>
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
