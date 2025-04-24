import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Navbar() {
  const [email, setemail] = useState("");
  const [feedback, setfeedback] = useState("");

  function sendmail(e) {
    e.preventDefault();
    const serviceId = "myservice705524";
    const tempId = "template_bgwofbd";
    const publickey = "s8L_H07NBLvLcdwTm";

    const tempparams = {
      name: email,
      message: feedback,
    };

    emailjs
      .send(serviceId, tempId, tempparams, publickey)
      .then(alert("Email sent successfully!"));

    setemail("");
    setfeedback("");
  }
  return (
    <>
      <nav>
        <div>
          <h2>Welcome</h2>
          <div>
            <div>
              <form target="_blank" onSubmit={sendmail}>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Give Feedback"
                  value={feedback}
                  onChange={(e) => setfeedback(e.target.value)}
                />

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <div></div>
    </>
  );
}

export default Navbar;
