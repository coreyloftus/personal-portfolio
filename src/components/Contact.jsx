import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = (props) => {
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

  const handleSubmit = (e) => {
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
    <div
      name="contact"
      className="w-full h-screen flex text-gray-800 dark:text-gray-100 justify-center items-center pt-8"
    >
      <div className="pt-8">
        <div className="max-w-[1000px] h-full mx-auto flex flex-col justify-center items-center px-4 py-4">
          <form
            re={form}
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col max-w-[600px]"
          >
            <div className="pb-4">
              <p className="text-4xl font-bold inline border-b-4 border-red-500">
                Contact
              </p>
              <p className=" py-4">
                // Submit the form below to message me, or email me at:{" "}
                <a href="mailto:coreyloftus@gmail.com">coreyloftus@gmail.com</a>
                .
              </p>
            </div>
            <input
              className="my-1 p-2 rounded-sm"
              type="text"
              placeholder="Name"
              name="Name"
              onChange={handleChange}
            />
            <input
              className="my-4 p-2 rounded-sm"
              type="email"
              placeholder="Email"
              name="name"
              onChange={handleChange}
            />
            <textarea
              className="my-1 p-2 rounded-sm"
              rows="5"
              name="message"
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
            <button className="rounded-sm border-2 hover:text-gray-100 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
