import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const form = useRef()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_vnx6o2i",
        "portfolio_contact_form",
        form.current,
        "J44JXfwvuyNXZtYsg"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    console.log(formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <>
      <div className="ContactForm">
        <p className="heading-3">Let's talk!</p>
        <form onSubmit={sendEmail}>
          <label>
            <span>Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <span>Email: </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <span>Message: </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}
export default ContactForm
