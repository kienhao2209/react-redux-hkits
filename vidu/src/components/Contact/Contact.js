import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavigate: false
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isNavigate: true
        });
    }

    render() {
        if (this.state.isNavigate) {
            return <Navigate to="/home" />
        }
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
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Name</label>
                                            <input type="text" id="name" className="form-control" placeholder="Name" required=""/>
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Email Address</label>
                                            <input type="email" id="email" className="form-control" placeholder="Email Adress" required=""/>
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group" />
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Phone Number</label>
                                        <input type="tel" id="phone" className="form-control" placeholder="Phone Number" required="" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group" />
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Message</label>
                                        <textarea className="form-control" id="message" rows="{5}" placeholder="message" required="" defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <button type="submit" onClick={(event) => this.submitForm(event)} className="btn btn-primary" id="sendMessageButton">Send</button>
                                    </div>
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