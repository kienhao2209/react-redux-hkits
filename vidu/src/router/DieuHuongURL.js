import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './../components/Home/Home.js';
import News from './../components/News/News.js';
import Detail from './../components/Detail/Detail.js';
import Contact from './../components/Contact/Contact.js';

class DieuHuongURL extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/tin" element={<News />} />
                <Route path="/tin-tuc/:slug/:id.html" element={<Detail />} />
                <Route path="/lien-he" element={<Contact />} />
            </Routes>
        );
    }
}

export default DieuHuongURL;