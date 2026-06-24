import { useState } from "react";
import emailjs from "@emailjs/browser";


function ContactForm() {

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            {
                setSuccess("Message Sent Successfully ✅");
                setTimeout(() => {
                    setSuccess("");
                }, 4000);
            }

            setFormData({
                from_name: "",
                from_email: "",
                subject: "",
                message: ""
            });

        } catch (error) {

            console.error(error);

            setError("Failed to send message ❌");
            setTimeout(() => {
                setError("");
            }, 4000);
        } finally {

            setLoading(false);

        }

    };

    return (

        <form
            className="contact-form"
            onSubmit={handleSubmit}
        >

            <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
            />

            <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
            />

            {success && (
                <p className="success-message">
                    {success}
                </p>
            )}

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

            <button type="submit">

                {loading
                    ? "Sending..."
                    : "Send Message"}

            </button>

        </form>

    );
}

export default ContactForm;