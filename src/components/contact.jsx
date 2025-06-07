import react from "react";
import "./contact.css"
import theme_pattern from "../assets/theme_pattern.svg"
import mail_icon from "../assets/mail_icon.svg"
import location_icon from "../assets/location_icon.svg"
import call_icon from "../assets/call_icon.svg"


export default function Contact() {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "5630f151-6419-4052-b70e-15e3d67c13d9");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            // console.log("Success", res);
            alert("Email Sent Successfully");
        }
    };

    return (
        <>
            <div id="contact" className="contact">
                <div className="contact-title">
                    <h1>Get in touch</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>
                            Let's talk
                        </h1>
                        <p>
                            I'm currently available to take on new projects, so feel free to contact me
                        </p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail_icon} alt="" /><p>puneetks2004@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={call_icon} alt="" /><p> 6268251129</p>
                            </div>
                            <div className="contact-detail">
                                <img src={location_icon} alt="" /><p>burjz khalifa , tower no.:r90, section 33</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder="Enter your name" name="name" />

                        <label htmlFor=""> Your Email </label>
                        <input type="text" placeholder="Enter your Email" name="Email" />

                        <label htmlFor="">write your Message</label>
                        <textarea name="message" rows="5" placeholder="Enter your message">
                        </textarea>

                        <button type="submit" className="contact-submit">
                            Submit now
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}