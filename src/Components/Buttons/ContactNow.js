import React from 'react';
import './ContactNow.css'

const ContactNow = () => {
    return <div>
        {/* Google Form */}
        <button type="button" className="contact-now-button">
            <a href="https://forms.gle/dfjHnWvY5xTgPdqY9"
                target="_blank"
                rel="noreferrer">Contact<br /> Now</a>
        </button>
    </div>;
};

export default ContactNow;
