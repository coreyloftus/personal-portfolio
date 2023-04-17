import React, { useRef, useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { useInView } from "react-intersection-observer"
import { HiArrowNarrowLeft } from "react-icons/hi"

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

  const [isVisible, setIsVisible] = useState(false)
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
  })
  useEffect(() => {
    if (contactInView) {
      setIsVisible(true)
    }
  }, [contactInView])
  return (
    <div
      name="contact"
      className="w-full h-screen flex text-gray-800 dark:text-gray-100 justify-center items-center pt-8"
      ref={contactRef}
    >
      <div className="pt-8">
        <div className="w-full h-full flex flex-col justify-center items-center px-4 py-4">
          <form
            ref={form}
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col"
          >
            <div className="pb-4">
              <div className="flex align-items">
                <p className="text-4xl font-bold inline border-b-4 border-red-500">
                  Contact
                </p>
                <div
                  className={`pl-6  ${
                    isVisible ? `slide-in-from-right` : `opacity-0`
                  }`}
                >
                  <HiArrowNarrowLeft size={40} />
                </div>
              </div>
              <p className="py-4">
                {`// Submit the form below to message me.`}
              </p>
              <p className="text-sm text-right">{`(Functionality brought to you by EmailJS.)`}</p>
            </div>
            <input
              className="my-1 p-2 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              placeholder="Name"
              name="Name"
              onChange={handleChange}
            />
            <input
              className="my-4 p-2 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              type="email"
              placeholder="Email"
              name="name"
              onChange={handleChange}
            />
            <textarea
              className="my-1 p-2 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="5"
              name="message"
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
            <button className="w-full rounded-sm border-2 hover:text-gray-100 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto">
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
