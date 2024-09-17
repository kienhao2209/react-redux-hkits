import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import dl from './../dulieu.json';

class News extends Component {
    render() {
        return (
            <>
                <header className="masthead tintuc">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-12">
                                {/* Mashead text and app badges*/}
                                <div className="mb-5 mb-lg-0 text-lg-start">
                                    <h1 className="display-1 lh-1 mb-3 text-center">Trang danh sach tin</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Begin News */}
                <div className="container">
                    <div className="row my-5">
                        {
                            dl.map((value, key) => {
                                return (
                                    <NewsItem
                                        key={key}
                                        id={value.id}
                                        title={value.tieuDe}
                                        quote={value.trichDan}
                                        description={value.noiDung}
                                        image={value.anh} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default News;