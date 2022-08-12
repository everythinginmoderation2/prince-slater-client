import React from 'react';
import './BookNow.css'

const BookNow = () => {
    return <div>
        {/* Calendly link widget */}
        <button type="button" className="book-now-button">
            <a href="https://calendly.com/ps--39/learn-a-song"
                target="_blank"
                rel="noreferrer">Book <br /> Now</a>
        </button>
    </div>;
};

export default BookNow;
