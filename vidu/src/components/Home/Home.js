import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
            <header className="masthead">
                <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                    {/* Mashead text and app badges*/}
                    <div className="mb-5 mb-lg-0 text-center text-lg-start">
                        <h1 className="display-1 lh-1 mb-3">
                        Showcase your app beautifully.
                        </h1>
                        <p className="lead fw-normal text-muted mb-5">
                        Launch your mobile app landing page faster with this free, open
                        source theme from Start Bootstrap!
                        </p>
                        <div className="d-flex flex-column flex-lg-row align-items-center">
                        <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                            <img
                            className="app-badge"
                            src="/assets/img/google-play-badge.svg"
                            alt="..."
                            />
                        </a>
                        <a href="#!">
                            <img
                            className="app-badge"
                            src="/assets/img/app-store-badge.svg"
                            alt="..."
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    {/* Masthead device mockup feature*/}
                    <div className="masthead-device-mockup">
                        <svg
                        className="circle"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <defs>
                            <linearGradient
                            id="circleGradient"
                            gradientTransform="rotate(45)"
                            >
                            <stop className="gradient-start-color" offset="0%" />
                            <stop className="gradient-end-color" offset="100%" />
                            </linearGradient>
                        </defs>
                        <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg
                        className="shape-1 d-none d-sm-block"
                        viewBox="0 0 240.83 240.83"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <rect
                            x="-32.54"
                            y="78.39"
                            width="305.92"
                            height="84.05"
                            rx="42.03"
                            transform="translate(120.42 -49.88) rotate(45)"
                        />
                        <rect
                            x="-32.54"
                            y="78.39"
                            width="305.92"
                            height="84.05"
                            rx="42.03"
                            transform="translate(-49.88 120.42) rotate(-45)"
                        />
                        </svg>
                        <svg
                        className="shape-2 d-none d-sm-block"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx={50} cy={50} r={50} />
                        </svg>
                        
                    </div>
                    </div>
                </div>
                </div>
            </header>
            {/* Quote/testimonial aside*/}
            <aside className="text-center bg-gradient-primary-to-secondary">
                <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-xl-8">
                    <div className="h2 fs-1 text-white mb-4">
                        "An intuitive solution to a common problem that we all face, wrapped
                        up in a single app!"
                    </div>
                    <img
                        src="assets/img/tnw-logo.svg"
                        alt="..."
                        style={{ height: "3rem" }}
                    />
                    </div>
                </div>
                </div>
            </aside>
            {/* App features section*/}
            <section id="features">
                <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                    <div className="container-fluid px-5">
                        <div className="row gx-5">
                        <div className="col-md-6 mb-5">
                            {/* Feature item*/}
                            <div className="text-center">
                            <i className="bi-phone icon-feature text-gradient d-block mb-3" />
                            <h3 className="font-alt">Device Mockups</h3>
                            <p className="text-muted mb-0">
                                Ready to use HTML/CSS device mockups, no Photoshop required!
                            </p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            {/* Feature item*/}
                            <div className="text-center">
                            <i className="bi-camera icon-feature text-gradient d-block mb-3" />
                            <h3 className="font-alt">Flexible Use</h3>
                            <p className="text-muted mb-0">
                                Put an image, video, animation, or anything else in the
                                screen!
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                            {/* Feature item*/}
                            <div className="text-center">
                            <i className="bi-gift icon-feature text-gradient d-block mb-3" />
                            <h3 className="font-alt">Free to Use</h3>
                            <p className="text-muted mb-0">
                                As always, this theme is free to download and use for any
                                purpose!
                            </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            {/* Feature item*/}
                            <div className="text-center">
                            <i className="bi-patch-check icon-feature text-gradient d-block mb-3" />
                            <h3 className="font-alt">Open Source</h3>
                            <p className="text-muted mb-0">
                                Since this theme is MIT licensed, you can use it
                                commercially!
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 order-lg-0">
                    {/* Features section device mockup*/}
                    <div className="features-device-mockup">
                        <svg
                        className="circle"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <defs>
                            <linearGradient
                            id="circleGradient"
                            gradientTransform="rotate(45)"
                            >
                            <stop className="gradient-start-color" offset="0%" />
                            <stop className="gradient-end-color" offset="100%" />
                            </linearGradient>
                        </defs>
                        <circle cx={50} cy={50} r={50} />
                        </svg>
                        <svg
                        className="shape-1 d-none d-sm-block"
                        viewBox="0 0 240.83 240.83"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <rect
                            x="-32.54"
                            y="78.39"
                            width="305.92"
                            height="84.05"
                            rx="42.03"
                            transform="translate(120.42 -49.88) rotate(45)"
                        />
                        <rect
                            x="-32.54"
                            y="78.39"
                            width="305.92"
                            height="84.05"
                            rx="42.03"
                            transform="translate(-49.88 120.42) rotate(-45)"
                        />
                        </svg>
                        <svg
                        className="shape-2 d-none d-sm-block"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        \
                        <circle cx={50} cy={50} r={50} />
                        </svg>
                        
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </>
        );
    }
}

export default Home;