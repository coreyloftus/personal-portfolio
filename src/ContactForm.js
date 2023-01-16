import { useState } from "react"
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({ name: "", email: "", message: "" })
    }

    return (
        <>
            <div className="ContactForm">
                <p className="heading-3">Want to talk? Send me a message here.</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Name:</span>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                       <span>Email: </span>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        <span>Message: </span>
                        <textarea name="message" value={formData.message} onChange={handleChange} />
                    </label>
                    <br />
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}
export default ContactForm
