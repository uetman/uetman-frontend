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
                    label: 'Home',
                    isSingle: true,
                    subCategory: []
                },
                {
                    id: 2,
                    name: 'Quản lý kho',
                    label: 'Storage',
                    isSingle: false,
                    subCategory: [
                        {
                            name: 'Sản phẩm',
                            label: 'Products',
                        },
                        {
                            name: 'Vật tư',
                            label: 'Materials',
                        },
                        {
                            name: 'Nhập kho',
                            label: 'ImportStorage',
                        },
                        {
                            name: 'Thêm mới',
                            label: 'AddStorage',
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'Đơn hàng',
                    label: 'Deal',
                    isSingle: false,
                    subCategory: [
                        {
                            name: 'Danh sách',
                            label: 'ListDeals',
                        },
                        {
                            name: 'Tạo mới',
                            label: 'AddDeal',
                        },                        
                    ]
                },
                {
                    id: 4,
                    name: 'Định mức',
                    label: 'Recipe',
                    isSingle: false,
                    subCategory: [
                        {
                            name: 'Danh sách',
                            label: 'ListRecipes',
                        },
                        {
                            name: 'Tạo công thức',
                            label: 'AddRecipe',
                        },                        
                    ]
                },
                {
                    id: 5,
                    name: 'Khách hàng',
                    label: 'Customer',
                    isSingle: false,
                    subCategory: [
                        {
                            name: 'Danh sách',
                            label: 'ListCustomers',
                        },
                        {
                            name: 'Thêm mới',
                            label: 'AddCustome',
                        },
                    ]
                },
                {
                    id: 6,
                    name: 'Thống kê',
                    label: 'Statistic',
                    isSingle: true,
                    subCategory: []
                },
                {
                    id: 7,
                    name: 'Yêu cầu mua hàng',
                    label: 'Require',
                    isSingle: true,
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
                label = { category.label }
                isSingle = { category.isSingle }
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