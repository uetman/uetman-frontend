import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as apiServer from '../../API/api';
import {connect} from 'react-redux';

const API = (apiServer.API_ref + "parts/");
// console.log(API);

class Materials extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			data: [],
			onFetchAPI: {
				status: "",
				isLoaded: false,
			}
		};
	}
	
	componentDidMount() {
		fetch(API, { 
		   	method: 'get',
		   	headers: {
		    	// 'Authorization': this.props.token,
		    	'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpZFwiOjEsXCJyb2xlc1wiOltdfSIsImlhdCI6MTU0MDUzODExMiwiZXhwIjoxNTQxMTQyOTEyfQ.DRbRsC7SA1ELAwE7oNOMBaxWfXs35QlsB_brM7aAciD1kGxGXWYnlEHuJIP0WWXqWpGvyBvWpOyB-9odnk-fig',		    	
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
		);
	}

	onAddMaterial = () => {
		this.setState({
			onFetchAPI: {
				status: "Loading...",
				isLoaded: false
			}
		});
		if(
			this.refs.part_code.value !== ""
			&& this.refs.part_description.value !== ""
			&& this.refs.part_line.value !== ""
			&& this.refs.part_name.value !== ""
			&& this.refs.purchase_price.value !== ""
			&& this.refs.quantity_in_stock.value !== ""
			&& this.refs.supplier_id.value !== ""
			&& this.refs.unit.value !== ""
		) {
			let newMaterial = {
				part_code: this.refs.part_code.value,
				part_description: this.refs.part_description.value,
				part_line: this.refs.part_line.value,
				part_name: this.refs.part_name.value,
				purchase_price: this.refs.purchase_price.value,
				quantity_in_stock: this.refs.quantity_in_stock.value,
				supplier_id: this.refs.supplier_id.value,
				unit: this.refs.unit.value,
			};
			console.log(this.refs.purchase_price.value.type);
			fetch(API, { 
			   	method: 'post',
			   	headers: {
			    	// 'Authorization': this.props.token,
			    	'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpZFwiOjEsXCJyb2xlc1wiOltdfSIsImlhdCI6MTU0MDUzODExMiwiZXhwIjoxNTQxMTQyOTEyfQ.DRbRsC7SA1ELAwE7oNOMBaxWfXs35QlsB_brM7aAciD1kGxGXWYnlEHuJIP0WWXqWpGvyBvWpOyB-9odnk-fig',		
			    	'Content-Type': 'application/json'    	
			    },
			    body: JSON.stringify(newMaterial),
			}).then(res => res.json()).then(
				(result) => {
					this.setState({
						onFetchAPI: {
							status: "Thao tác thành công, reload trang để cập nhật",
							isLoaded: true
						}
					});
				},
				(error) => {
					this.setState({
						onFetchAPI: {
							status: "Đã có lỗi xảy ra",
							isLoaded: true
						}
					});
				}
			)

		}
		else {
			this.setState({
				onFetchAPI: {
					status: "Bạn cần điền đủ thông tin",
					isLoaded: false
				}
			});
		}
	}

	render() {
		const columns = [
		  	{
		    	Header: 'Id',
		    	accessor: 'part_id', // String-based value accessors!
				width: 50,
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
				<div>
					<div className="p-2">
						<button type="button" className="btn btn-success btn-block ml-0" data-toggle="modal" data-target="#addMaterial">
							<h6 className="m-0">Thêm vật tư</h6>
						</button>
					</div>
					<div className="modal fade" id="addMaterial">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
							        <h4 className="modal-title">Thêm vật tư</h4>
							        {/*<button type="button" className="close" data-dismiss="modal">x</button>*/}
							    </div>
							    <div className="modal-body">
							        <form>
							        	<div className="form-inline m-2">
							        		<label>Mã vật tư</label>
							        		<input className="form-control my-input ml-2" ref="part_code" required/>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Mô tả</label>
							        		<input className="form-control my-input ml-2" ref="part_description"></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Loại vật tư</label>
							        		<input className="form-control my-input ml-2" ref="part_line"></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Tên vật tư</label>
							        		<input className="form-control my-input ml-2" ref="part_name"></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Giá nhập</label>
							        		<input type="number" className="form-control my-input ml-2" ref="purchase_price"></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Số lượng</label>
							        		<input type="number" className="form-control my-input ml-2" ref="quantity_in_stock"></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Mã nhà cung cấp</label>
							        		<input type="number" className="form-control my-input ml-2" ref="supplier_id"></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Đơn vị</label>
							        		<input className="form-control my-input ml-2" ref="unit"></input>
							        	</div>
							        </form>
							    </div>
							    <div className="modal-footer">
							    	<button type="submit" className="btn btn-outline-success"  data-toggle="modal" data-target="#resultModal" onClick={ this.onAddMaterial } ><b>Lưu</b></button>
							        <button type="button" className="btn btn-outline-danger" data-dismiss="modal"><b>Hủy</b></button>
							    </div>
							    	
							</div>
						</div>
					</div>
					<div className="modal fade" id="resultModal">
						<div className="modal-dialog modal-dialog-centered modal-sm">
							<div className="modal-content">
							    <div className="modal-body">
							        <h4 className="text-center">{this.state.onFetchAPI.status}</h4>
							    </div>
							</div>
						</div>
					</div>
					<ReactTable
						data={data}
				    	columns={columns}
				    	className = "-highlight"
				    	//showPaginationTop = {true}
				    	defaultPageSize = {15}
				    	pageSizeOptions = {[15, 25, 50, 100]}
				    	filterable = {true}
				 	></ReactTable>
			 	</div>
			);

		}
	
  	}
}

const mapStateToProps = (state) => {
	return {
		token: state.user.token
	}
}

export default connect(mapStateToProps, null)(Materials);