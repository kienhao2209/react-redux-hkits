import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavigate: false,
            fNgay: "thu7"
        }
    }
    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        this.setState({
            [ten]: giatri
        });
    } 
    isFileChange = (event) => {
        const tenanh = event.target.files[0].name;
        this.setState({
            fAnh: tenanh
        });
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isNavigate: true
        });
    }
    getGiaTri = () => {
        let noiDung = "";
        noiDung += "Tên: " + this.state.fName;
        noiDung += " - Email: " + this.state.fEmail;
        noiDung += " - Phone: " + this.state.fPhone;
        noiDung += " - Message: " + this.state.fMess;
        noiDung += " - Ngay: " + this.state.fNgay;
        noiDung += " - Anh: " + this.state.fAnh;
        return noiDung;
    }
    render() {
        if (this.state.isNavigate) {
            console.log(this.getGiaTri());
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
                                            <input onChange={(event) => this.isChange(event)} name="fName" type="text" id="name"
                                                className="form-control" placeholder="Name" required="required" aria-invalid="false" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Email Address</label>
                                            <input onChange={(event) => this.isChange(event)} name="fEmail" type="email" id="email"
                                                className="form-control" placeholder="Email Adress" required="required"
                                                aria-invalid="false" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group" />
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Phone Number</label>
                                        <input onChange={(event) => this.isChange(event)} name="fPhone" type="tel" id="phone"
                                            className="form-control" placeholder="Phone Number" required="" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Message</label>
                                            <textarea onChange={(event) => this.isChange(event)} name="fMess" className="form-control" id="message" rows="{5}" placeholder="message" required="" defaultValue={""} />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <br />

                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Chọn ngày</label>
                                            <select className="form-control" value={this.state.fNgay} onChange={(event) => this.isChange(event)} name="fNgay" id="">
                                                <option value="thu3">Ngày Thứ 3</option>
                                                <option value="thu5">Ngày Thứ 5</option>
                                                <option value="thu7">Ngày Thứ 7</option>
                                                <option value="chunhat">Ngày Chủ Nhật</option>
                                            </select>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Chọn ảnh</label>
                                            <input onChange={(event) => this.isFileChange(event)} type="file" className="form-control-file" name="fAnh"></input>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <br />

                                    <div id="success" />
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