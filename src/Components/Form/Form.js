import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form>
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" />
            </form>
        </div>
    )
}

export default Form