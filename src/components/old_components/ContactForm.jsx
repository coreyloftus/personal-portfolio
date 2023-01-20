import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <>
      <div className="ContactForm">
        <p className="heading-3">Let's talk!</p>
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <li className="half">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </li>

            <li className="half">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </li>
            <li>
              <textarea
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </li>
            <br />
            <input type="submit" className="flat-button" value="Send" />
          </ul>
        </form>
      </div>
    </>
  )
}
export default ContactForm
