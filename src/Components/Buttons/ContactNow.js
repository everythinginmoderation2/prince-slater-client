import React from 'react';
import './ContactNow.css'

const ContactNow = () => {
    return <div>
        {/* Google Form */}
        <button type="button" className="contact-now-button">
            <a href="https://forms.gle/JAB9RbM8QSLVBTFg7"
                target="_blank"
                rel="noreferrer">Contact<br /> Now</a>
        </button>
    </div>;
};

export default ContactNow;
