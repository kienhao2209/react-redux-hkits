import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua: false
        }
    }

    thayDoiTrangThai = () => {
        this.setState({
            trangThaiChinhSua: !this.state.trangThaiChinhSua
        });
    }

    hienThiNut = () => {
        if (this.state.trangThaiChinhSua === true) {
            return <div className="btn d-block btn-outline-secondary mb-3" onClick={() => this.thayDoiTrangThai()}>Đóng lại</div>;
        } else {
            return <div className="btn d-block btn-outline-info mb-3" onClick={() => this.thayDoiTrangThai()}>Thêm mới</div>;
        }
    }

    hienThiForm = () => {
        if (this.state.trangThaiChinhSua === true) {
            return (
                <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
                    <div className="card-header">Thêm mới user vào hệ thống</div>
                    <div className="card-body text-primary">
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tên user"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Điện thoại"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <select className="form-select" required>
                                <option>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-primary d-block">Thêm mới</div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col-md-3">
                {this.hienThiNut()}
                {this.hienThiForm()}
            </div>
        );
    }
}

export default AddUser;