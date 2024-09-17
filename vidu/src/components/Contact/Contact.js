import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <>
            <header className="masthead tintuc">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-12">
                        {/* Mashead text and app badges*/}
                            <div className="mb-5 mb-lg-0 text-lg-start">
                                <h1 className="display-1 lh-1 mb-3 text-center">Trang liên hệ</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Begin Contact */}
            <section className="page-section" id="contact">
                <div className="container">
                    {/* Contact Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-3">
                        Liên hệ với chúng tôi
                    </h2>
                    {/* Contact Section Form*/}
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            {/* * * * * * * * * * * * * * * **/}
                            {/* * * SB Forms Contact Form * **/}
                            {/* * * * * * * * * * * * * * * **/}
                            {/* This form is pre-integrated with SB Forms.*/}
                            {/* To make this form functional, sign up at*/}
                            {/* https://startbootstrap.com/solution/contact-forms*/}
                            {/* to get an API token!*/}
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                {/* Name input*/}
                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control is-invalid"
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name..."
                                        data-sb-validations="required"
                                        data-sb-can-submit="no"
                                    />
                                    <label htmlFor="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                {/* Email address input*/}
                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control"
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        data-sb-validations="required,email"
                                        data-sb-can-submit="no"
                                    />
                                    <label htmlFor="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                {/* Phone number input*/}
                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control"
                                        id="phone"
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                        data-sb-validations="required"
                                        data-sb-can-submit="no"
                                    />
                                    <label htmlFor="phone">Phone number</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                                {/* Message input*/}
                                <div className="form-floating mb-3">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        type="text"
                                        placeholder="Enter your message here..."
                                        style={{ height: "10rem" }}
                                        data-sb-validations="required"
                                        data-sb-can-submit="no"
                                        defaultValue={""}
                                    />
                                    <label htmlFor="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                {/* Submit success message*/}
                                {/**/}
                                {/* This is what your users will see when the form*/}
                                {/* has successfully submitted*/}
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms
                                        </a>
                                    </div>
                                </div>
                                {/* Submit error message*/}
                                {/**/}
                                {/* This is what your users will see when there is*/}
                                {/* an error submitting the form*/}
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">Error sending message!</div>
                                </div>
                                {/* Submit Button*/}
                                <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit" >Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </>             
        );
    }
}

export default Contact;