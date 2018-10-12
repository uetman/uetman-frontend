import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as apiServer from '../../API/api';

const API = (apiServer.API_ref + "parts/");
console.log(API);

class Materials extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			data: []
		};
	}

	componentDidMount() {
		fetch(API).then(res => res.json()).then(
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

		}
	
		

  	const columns = [
	  	{
	    	Header: 'Id',
	    	accessor: 'part_id' // String-based value accessors!
	  	}, 
	  	{
	    	Header: 'Code',
	    	accessor: 'part_code',
	   	}, 
	   	{
	    	id: 'part_name', // Required because our accessor is not a string
	    	Header: 'part_name',
	    	accessor: d => d.part_name // Custom value accessors!
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
	    	Header: 'Giá',
	    	accessor: 'purchase_price' // String-based value accessors!
	  	}, 
	  	{
	    	Header: props => <span>part_line</span>, // Custom header components!
	    	accessor: 'part_line'
	  	}, 
	  	// {
	   //  	Header: 'Mô tả',
	   //  	accessor: 'part_description' // String-based value accessors!
	  	// }, 
	  	// {
	   //  	Header: 'Nhà phân phối',
	   //  	accessor: 'supplier_name' // String-based value accessors!
	  	// }, 
  	]

	return (
		<ReactTable
			data={data}
	    	columns={columns}
	 	></ReactTable>
	);
  	}
}

export default Materials;