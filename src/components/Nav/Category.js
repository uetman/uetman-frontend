import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../redux/actions';

class Category extends Component {
    handleClick(isSubcate, category, isSingle) {
        if(isSubcate) this.props.onChangeCategory(category);
        else if (isSingle) this.props.onChangeCategory(category);
    }

    render() {
    	let sub_category = this.props.subCategory.map((subCate, index) => {
        		// console.log(subCate);
        		return 	(<div className="nav-item ml-4 sub-cate" key={index} onClick= { () => { this.handleClick(true, subCate.label) } }>
        					{subCate.name}
        				</div>)
        	});

        return (
            <div className="row container-fluid category">
                <div className="container-fluid nav flex-column" data-toggle="collapse" data-target={'#category-option-' + this.props.label} onClick= { () => { this.handleClick(false, this.props.label, this.props.isSingle) } }> { this.props.name } </div>
                <div id={'category-option-' + this.props.label} className="collapse">
                	{sub_category}
                </div>	
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeCategory: (category) => {
            dispatch(actions.changeCategory(category));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);