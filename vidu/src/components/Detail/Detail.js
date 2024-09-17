import React from 'react';
import { Link, useParams } from 'react-router-dom';
import dl from './../dulieu.json';

const Detail = () => {
    // Lấy tham số URL nếu cần, ví dụ slug và id
    const { slug, id } = useParams();

    return (
        <>
            <header className="masthead tintuc">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-12">
                            {/* Mashead text and app badges */}
                            <div className="mb-5 mb-lg-0 text-lg-start">
                                <h1 className="display-1 lh-1 mb-3 text-center">Trang Chi Tiết Tin</h1>
                                <h3 className="text-center"><span className="text-danger">ID:</span> {id}</h3>
                                <h3 className="text-center"><span className="text-danger">slug:</span> {slug}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Begin News */}
            <div className="container">
                {/* Phần xuất dữ liệu ra giao diện dựa trên tham số truyền vào từ URL nè  */}
                {
                    dl.map((value, key) => {
                        console.log(typeof(value.id)); // dulieu.json
                        console.log(typeof(id)); // tham so URL
                        if (value.id == id) {
                            return (
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="my-4 bg-transparent text-dark">
                                            <img src={value.anh} className="img-fluid mb-3" alt="News" />
                                            <h1>{value.tieuDe}</h1>
                                            <p>{value.trichDan}</p>
                                            <p>{value.noiDung}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                <div className="row">
                    <div className="col-md-12">
                        <div className="card my-5 border-primary">
                            <div className="card-body text-center">Tin liên quan</div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <Link to="/tin-chi-tiet">
                                <img
                                    src="https://www.placeholder.com/800x400"
                                    className="card-img-top"
                                    alt="Related news 1"
                                />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">Click vào dẫn đến trang detail.html 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <Link to="/tin-chi-tiet">
                                <img src="https://www.placeholder.com/800x400" className="card-img-top" alt="Related news 2" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">Click vào dẫn đến trang detail.html 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <Link to="/tin-chi-tiet">
                                <img src="https://www.placeholder.com/800x400" className="card-img-top" alt="Related news 3" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">Click vào dẫn đến trang detail.html 3</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <Link to="/tin-chi-tiet">
                                <img src="https://www.placeholder.com/800x400" className="card-img-top" alt="Related news 4" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">Click vào dẫn đến trang detail.html 4</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
