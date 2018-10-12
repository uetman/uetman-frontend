import React, { Component } from 'react';

class Category extends Component {
    render() {
    	let sub_category = this.props.subCategory.map((subCate, index) => {
        		// console.log(subCate);
        		return 	(<div className="nav-item ml-4 sub-cate" key={index}>
        					{subCate}
        				</div>)
        	});

        return (
            <div className="row container-fluid category">
                <div className="container-fluid nav flex-column" data-toggle="collapse" data-target={'#category-option' + this.props.name}> { this.props.name } </div>
                <div id={'category-option' + this.props.name} className="collapse">
                	{sub_category}
                </div>	
            </div>
        );
    }
}

export default Category;