import React from 'react';
// import PropTypes from 'prop-types';
import './index.scss'
import { useForm, ValidationError } from '@formspree/react';
Contact.propTypes = {

};

function Contact(props) {

    const [state, handleSubmit] = useForm("xdoyokpl");
    if (state.succeeded) {
        return (
            <div className="contact">
                <h1>Contact me</h1>
                <form className='contact__form' onSubmit={handleSubmit}>
                    <input className='contact__form--input'
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                    />


                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />


                    <textarea
                        className='contact__form--textArea'
                        id="message"
                        name="message"
                        placeholder="Write your text here"
                    />


                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />


                    <button className='contact__form--button' type="submit" disabled={state.submitting}>
                        SEND
                </button>
                    {/* <p>Thanks for your responding! I look forward to meeting with you.</p>; */}
                    <p> Thank you for your consideration. I look forward to speaking with you about this opportunity.</p>
                    {/* <p>Thanks for your responding! I will reply within 48 hours.</p> */}
                </form>
            </div>
        )
    }

    return (
        <div className="contact">
            <h1>Contact now</h1>
            <form className='contact__form' onSubmit={handleSubmit}>


                {/* <label htmlFor="email">
    Email Address
</label> */}


                <input className='contact__form--input'
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                />


                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />


                <textarea
                    className='contact__form--textArea'
                    id="message"
                    name="message"
                    placeholder="Write your text here"
                />


                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />


                <button className='contact__form--button' type="submit" disabled={state.submitting}>
                    SEND
                </button>
            </form>
        </div>
    );

}

export default Contact;