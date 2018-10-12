import React, { Component } from 'react';
import Category from './Category';

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category_list: [
                {
                    id: 1,
                    name: 'Trang chủ',
                    subCategory: []
                },
                {
                    id: 2,
                    name: 'Quản lý kho',
                    subCategory: [
                        'Sản phẩm',
                        'Vật tư',
                        'Nhập kho',
                        'Thêm mới'
                    ]
                },
                {
                    id: 3,
                    name: 'Đơn hàng',
                    subCategory: [
                        'Danh sách',
                        'Tạo mới'
                    ]
                },
                {
                    id: 4,
                    name: 'Định mức',
                    subCategory: [
                        'Danh sách',
                        'Tạo công thức'
                    ]
                },
                {
                    id: 5,
                    name: 'Khách hàng',
                    subCategory: [
                        'Danh sách',
                        'Thêm mới'
                    ]
                },
                {
                    id: 6,
                    name: 'Thống kê',
                    subCategory: []
                },
                {
                    id: 7,
                    name: 'Yêu cầu mua hàng (Vật tư cần bổ sung)',
                    subCategory: []
                }
            ]
        }
    }

    render() {
        let elements = this.state.category_list.map((category, index) => {
            return <Category 
                key={ category.id }
                name={ category.name } 
                subCategory={ category.subCategory } 
                />
        });

        return (
            <div className="row container-fluid side-bar pl-4 pr-0 m-0">
                { elements }
            </div>
        );
    }
}

export default SideBar;