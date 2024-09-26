import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <div className="col-md-9">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Trần Đức Lương</td>
                            <td>0842822927</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning btn--edit">
                                        <i className="btn--edit-icon fa-solid fa-pen-to-square" />
                                        <span className="btn--edit-text">Sửa</span>
                                    </div>
                                    <div className="btn btn-danger btn--delete">
                                        <i className="btn--delete-icon fa-solid fa-trash" />
                                        <span className="btn--delete-text">Xoá</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>Trần Đức Lương</td>
                            <td>0842822927</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning btn--edit">
                                        <i className="btn--edit-icon fa-solid fa-pen-to-square" />
                                        <span className="btn--edit-text">Sửa</span>
                                    </div>
                                    <div className="btn btn-danger btn--delete">
                                        <i className="btn--delete-icon fa-solid fa-trash" />
                                        <span className="btn--delete-text">Xoá</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">3</td>
                            <td>Phan Văn Tài Em</td>
                            <td>0842822927</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning btn--edit">
                                        <i className="btn--edit-icon fa-solid fa-pen-to-square" />
                                        <span className="btn--edit-text">Sửa</span>
                                    </div>
                                    <div className="btn btn-danger btn--delete">
                                        <i className="btn--delete-icon fa-solid fa-trash" />
                                        <span className="btn--delete-text">Xoá</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">4</td>
                            <td>Bùi Tiến Dũng</td>
                            <td>0842822927</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning btn--edit">
                                        <i className="btn--edit-icon fa-solid fa-pen-to-square" />
                                        <span className="btn--edit-text">Sửa</span>
                                    </div>
                                    <div className="btn btn-danger btn--delete">
                                        <i className="btn--delete-icon fa-solid fa-trash" />
                                        <span className="btn--delete-text">Xoá</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">5</td>
                            <td>Trần Đức Lương</td>
                            <td>0842822927</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning btn--edit">
                                        <i className="btn--edit-icon fa-solid fa-pen-to-square" />
                                        <span className="btn--edit-text">Sửa</span>
                                    </div>
                                    <div className="btn btn-danger btn--delete">
                                        <i className="btn--delete-icon fa-solid fa-trash" />
                                        <span className="btn--delete-text">Xoá</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;