import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as apiServer from '../../API/api';
import { connect } from 'react-redux';

const API = (apiServer.API_ref + "products/");

class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			data: []
		};
	}
	
	componentDidMount() {
		fetch(API, { 
		   	method: 'get',
		   	headers: {
		    	'Authorization': this.props.token,		    	
		    }
		}).then(res => res.json()).then(
			(result) => {

				this.setState({
					isLoaded: true,
					data: result
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}

	render() {
		const columns = [
		  	{
		    	Header: 'Id',
		    	accessor: 'product_id' // String-based value accessors!
		  	}, 
		  	{
		    	Header: 'Code',
		    	accessor: 'product_code',
		   	}, 
		   	{
		    	id: 'part_name', // Required because our accessor is not a string
		    	Header: 'product_name',
		    	accessor: d => d.product_name // Custom value accessors!
		  	},
		  	{
		    	Header: 'Đơn vị',
		    	accessor: 'unit' // String-based value accessors!
		  	}, 
		  	{
		    	Header: 'Số lượng',
		    	accessor: 'quantity_in_stock' // String-based value accessors!
		  	}, 
		  	{
		    	Header: 'Giá bán',
		    	accessor: 'sale_price' // String-based value accessors!
		  	}, 
		  	{
		    	Header: props => <span>part_line</span>, // Custom header components!
		    	accessor: 'product_line'
		  	}, 
		  	// {
		   //  	Header: 'Mô tả',
		   //  	accessor: 'product_description' // String-based value accessors!
		  	// }, 
		  	// {
		   //  	Header: 'Nhà phân phối',
		   //  	accessor: 'supplier_name' // String-based value accessors!
		  	// }, 
	  	];

		const {error, isLoaded, data} = this.state;

		if(error) {
			return <div>
				Error: {error.message}
				</div>
		}
		else if(!isLoaded) {
			return <div> Loading... </div>
		}
		else {
			return (
				<ReactTable
					data={data}
			    	columns={columns}
			 	></ReactTable>
			);
		}


	}
}

const mapStateToProps = (state) => {
	return {
		token: state.user.token,
	}
}

export default connect(mapStateToProps, null)(Products);