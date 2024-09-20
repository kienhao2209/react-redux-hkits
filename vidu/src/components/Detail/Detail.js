import React from 'react';
import { useParams } from 'react-router-dom';
import dl from './../dulieu.json';
import NewsRelated from './../NewsRelated/NewsRelated';

const Detail = () => {
    // Lấy tham số URL nếu cần, ví dụ slug và id
    const { slug, id } = useParams();
    let count = 1;

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
                        if (value.id === parseInt(id,20)) {
                            return (
                                <div className="row" key={key}>
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
                        } else {
                            return null;
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
                    {
                        dl.map((value, key) => {
                            if (value.id !== parseInt(id,20)) {
                                count++;
                                if (count <= 5) {
                                    return (
                                        <NewsRelated key={key}
                                            id={value.id}
                                            title={value.tieuDe}
                                            quote={value.trichDan}
                                            description={value.noiDung}
                                            image={value.anh} />
                                    )
                                } else {
                                    return null;
                                }
                            } else {
                                return null;
                            }
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Detail;
