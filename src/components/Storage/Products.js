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
			data: [],
			onFetchAPI: {
				status: "",
				isLoaded: false,
			},
			deleteID: 0,
			selectdID: 0,
			currentProduct: {},
			updateProduct: false,
		};
	}
	
	componentDidMount() {
		fetch(API, { 
		   	method: 'get',
		   	headers: {
		    	'Authorization': this.props.token,
		    	// 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpZFwiOjEsXCJyb2xlc1wiOltdfSIsImlhdCI6MTU0MDUzODExMiwiZXhwIjoxNTQxMTQyOTEyfQ.DRbRsC7SA1ELAwE7oNOMBaxWfXs35QlsB_brM7aAciD1kGxGXWYnlEHuJIP0WWXqWpGvyBvWpOyB-9odnk-fig',		    			    	
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

	onAddProduct = () => {
		this.setState({
			onFetchAPI: {
				status: "Loading...",
				isLoaded: false
			}
		});
		if(
			this.refs.product_code.value !== ""
			&& this.refs.product_description.value !== ""
			&& this.refs.product_line.value !== ""
			&& this.refs.product_name.value !== ""
			&& this.refs.sale_price.value !== ""
			&& this.refs.quantity_in_stock.value !== ""
			&& this.refs.unit.value !== ""
		) {
			let newProduct = {
				product_code: this.refs.product_code.value,
				product_description: this.refs.product_description.value,
				product_line: this.refs.product_line.value,
				product_name: this.refs.product_name.value,
				sale_price: this.refs.sale_price.value,
				quantity_in_stock: this.refs.quantity_in_stock.value,
				unit: this.refs.unit.value,
			};
			
			fetch(API, { 
			   	method: 'post',
			   	headers: {
			    	'Authorization': this.props.token,
			    	// 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpZFwiOjEsXCJyb2xlc1wiOltdfSIsImlhdCI6MTU0MDUzODExMiwiZXhwIjoxNTQxMTQyOTEyfQ.DRbRsC7SA1ELAwE7oNOMBaxWfXs35QlsB_brM7aAciD1kGxGXWYnlEHuJIP0WWXqWpGvyBvWpOyB-9odnk-fig',		
			    	'Content-Type': 'application/json'    	
			    },
			    body: JSON.stringify(newProduct),
			}).then(res => res.json()).then(
				(result) => {
					// console.log(result.success);
					if(result.success === true) {
						this.setState({
							onFetchAPI: {
								status: "Thao tác thành công",
								isLoaded: true
							},
						});
						this.componentDidMount();
						document.getElementById("addProductForm").reset();
					}
					else {
						this.setState({
							onFetchAPI: {
								status: "Đã có lỗi xảy ra",
								isLoaded: true
							}
						});
					}
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

	onDeleteProduct = () => {
		this.setState({
			onFetchAPI: {
				status: "Loading...",
				isLoaded: false
			}
		});
		fetch(API + this.state.deleteID, { 
			   	method: 'delete',
			   	headers: {
			    	'Authorization': this.props.token,
			    	// 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpZFwiOjEsXCJyb2xlc1wiOltdfSIsImlhdCI6MTU0MDUzODExMiwiZXhwIjoxNTQxMTQyOTEyfQ.DRbRsC7SA1ELAwE7oNOMBaxWfXs35QlsB_brM7aAciD1kGxGXWYnlEHuJIP0WWXqWpGvyBvWpOyB-9odnk-fig',		
			    	// 'Content-Type': 'application/json'    	
			    },
			    path: this.state.deleteID,
			}).then(res => res.json()).then(
				(result) => {
					// console.log(result.success);
					if(result.success === true) {
						this.setState({
							onFetchAPI: {
								status: "Thao tác thành công",
								isLoaded: true
							}
						});
						this.componentDidMount();
					}
					else {
						this.setState({
							onFetchAPI: {
								status: "Đã có lỗi xảy ra",
								isLoaded: true
							}
						});
					}
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
			this.setState({deleteID: 0})
	}

	onSelectProduct(id) {
		document.getElementById("detailProductForm").reset();
		this.setState({
			currentProduct: {},
			selectdID: id
		});
		fetch(API + id, { 
			   	method: 'get',
			   	headers: {
			    	'Authorization': this.props.token,
			    	// 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpZFwiOjEsXCJyb2xlc1wiOltdfSIsImlhdCI6MTU0MDUzODExMiwiZXhwIjoxNTQxMTQyOTEyfQ.DRbRsC7SA1ELAwE7oNOMBaxWfXs35QlsB_brM7aAciD1kGxGXWYnlEHuJIP0WWXqWpGvyBvWpOyB-9odnk-fig',		
			    	// 'Content-Type': 'application/json'    	
			    },
			    path: this.state.selectdID,
			}).then(res => res.json()).then(
				(result) => {
					// console.log(result);
					this.setState({currentProduct: result});
				},
				(error) => {
					console.log(error);
				}
			)
	}

	updateProduct(id) {
		this.setState({
			onFetchAPI: {
				status: "Loading...",
				isLoaded: false
			}
		});
		if(
			this.refs.product_code_update.value !== ""
			&& this.refs.product_description_update.value !== ""
			&& this.refs.product_line_update.value !== ""
			&& this.refs.product_name_update.value !== ""
			&& this.refs.sale_price_update.value !== ""
			&& this.refs.quantity_in_stock_update.value !== ""
			&& this.refs.unit_update.value !== ""
		) {
			let newProduct = {				
				description: this.refs.product_description_update.value,
				product_code: this.refs.product_code_update.value,
				product_id: id,
				product_line: this.refs.product_line_update.value,
				product_name: this.refs.product_name_update.value,
				sale_price: this.refs.sale_price_update.value,
				quantity_in_stock: this.refs.quantity_in_stock_update.value,
				unit: this.refs.unit_update.value,
			};
			fetch(API, { 
			   	method: 'put',
			   	headers: {
			    	'Authorization': this.props.token,
			    	// 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpZFwiOjEsXCJyb2xlc1wiOltdfSIsImlhdCI6MTU0MDUzODExMiwiZXhwIjoxNTQxMTQyOTEyfQ.DRbRsC7SA1ELAwE7oNOMBaxWfXs35QlsB_brM7aAciD1kGxGXWYnlEHuJIP0WWXqWpGvyBvWpOyB-9odnk-fig',		
			    	'Content-Type': 'application/json'    	
			    },
			    body: JSON.stringify(newProduct),
			}).then(res => res.json()).then(
				(result) => {
					// console.log(result.success);
					if(result.success === true) {
						this.setState({
							onFetchAPI: {
								status: "Thao tác thành công",
								isLoaded: true
							},
						});
						this.componentDidMount();
					}
					else {
						this.setState({
							onFetchAPI: {
								status: "Đã có lỗi xảy ra",
								isLoaded: true
							}
						});
					}
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
		var classnames = require('classnames');
		const columns = [
		  	{
		    	Header: 'Id',
		    	accessor: 'product_id',
		    	width: 50,
		    },
		  	{
		    	Header: 'Mã',
		    	accessor: 'product_code',
		   	}, 
		   	{
		    	id: 'Tên', // Required because our accessor is not a string
		    	Header: 'product_name',
		    	accessor: d => d.product_name // Custom value accessors!
		  	},
		  	{
		    	Header: 'Đơn vị',
		    	accessor: 'unit',
		    	width: 100,
		  	}, 
		  	{
		    	Header: 'Số lượng',
		    	accessor: 'quantity_in_stock',
		    	width: 100,
		  	}, 
		  	{
		    	Header: 'Giá bán',
		    	accessor: 'sale_price',
		    	width: 100,
		  	}, 
		  	{
		    	Header: props => <span>Loại</span>, // Custom header components!
		    	accessor: 'product_line'
		  	}, 
		  	{
		  		accessor:'product_id',
		  		Cell: row => (
		  			<div>
			  			<button type="button" className="btn btn-info" data-toggle="modal" data-target="#infoModal" onClick={ () => {this.onSelectProduct(row.value); this.setState({updateProduct: false})} }>
							<i className="fa fa-info-circle"></i>
			  			</button>
		  			</div>
		  		),
		  		width: 50,
		  	},
		  	{
		  		accessor:'product_id',
		  		Cell: row => (
		  			<div>
			  			<button type="button" className="btn btn-danger" data-toggle="modal" data-target="#warningModal" onClick={() => {this.setState({deleteID: row.value})} }>
							<i className="fas fa-trash-alt"></i>
			  			</button>
		  			</div>
		  		),
		  		width: 40,
		  	}
		  	// {
		   //  	Header: 'Mô tả',
		   //  	accessor: 'product_description' // String-based value accessors!
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
						<button type="button" className="btn btn-success btn-block ml-0" data-toggle="modal" data-target="#addProduct">
							<h6 className="m-0">Thêm sản phẩm</h6>
						</button>
					</div>
					<div className="modal fade" id="addProduct">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
							        <h4 className="modal-title">Thêm sản phẩm</h4>
							        {/*<button type="button" className="close" data-dismiss="modal">x</button>*/}
							    </div>
							    <div className="modal-body">
							        <form id="addProductForm">
							        	<div className="form-inline m-2">
							        		<label>Mã sản phẩm</label>
							        		<input className="form-control my-input ml-2" ref="product_code" required/>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Mô tả</label>
							        		<input className="form-control my-input ml-2" ref="product_description"></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Loại sản phẩm</label>
							        		<input className="form-control my-input ml-2" ref="product_line"></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Tên sản phẩm</label>
							        		<input className="form-control my-input ml-2" ref="product_name"></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Giá nhập</label>
							        		<input type="number" className="form-control my-input ml-2" ref="sale_price"></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Số lượng</label>
							        		<input type="number" className="form-control my-input ml-2" ref="quantity_in_stock"></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Đơn vị</label>
							        		<input className="form-control my-input ml-2" ref="unit"></input>
							        	</div>
							        </form>
							    </div>
							    <div className="modal-footer">
							    	<button type="submit" className="btn btn-outline-success"  data-toggle="modal" data-target="#resultModal" onClick={ this.onAddProduct } ><b>Lưu</b></button>
							        <button type="button" className="btn btn-outline-danger" data-dismiss="modal"><b>Hủy</b></button>
							    </div>
							    	
							</div>
						</div>
					</div>
					<div className="modal fade" id="infoModal">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
							        <h4 className="modal-title">Thông tin sản phẩm</h4>
							        <button type="button" className="btn btn-primary float-right" onClick={() => {this.setState({updateProduct: true})}}>Sửa</button>
							    </div>
							    <div className="modal-body">
							        <form id="detailProductForm">
							        	<div className="form-inline m-2">
							        		<label>Mã sản phẩm</label>
							        		<input className="form-control my-input ml-2" defaultValue={this.state.currentProduct.product_id} ref="product_code_update" disabled={!this.state.updateProduct}></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Mô tả</label>
							        		<input className="form-control my-input ml-2" defaultValue={this.state.currentProduct.product_description} ref="product_description_update" disabled={!this.state.updateProduct}></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Loại sản phẩm</label>
							        		<input className="form-control my-input ml-2" defaultValue={this.state.currentProduct.product_line} ref="product_line_update" disabled={!this.state.updateProduct}></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Tên sản phẩm</label>
							        		<input className="form-control my-input ml-2" defaultValue={this.state.currentProduct.product_name} ref="product_name_update" disabled={!this.state.updateProduct}></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Giá nhập</label>
							        		<input type="number" className="form-control my-input ml-2" defaultValue={this.state.currentProduct.sale_price} ref="sale_price_update" disabled={!this.state.updateProduct}></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Số lượng</label>
							        		<input type="number" className="form-control my-input ml-2" defaultValue={this.state.currentProduct.quantity_in_stock} ref="quantity_in_stock_update" disabled={!this.state.updateProduct}></input>
							        	</div>
							        	<div className="form-inline m-2">
							        		<label>Đơn vị</label>
							        		<input className="form-control my-input ml-2" ref="unit_update" defaultValue={this.state.currentProduct.unit} disabled={!this.state.updateProduct}></input>
							        	</div>
							        </form>
							    </div>
							    <div className="modal-footer">
							    	<button type="submit" className={classnames("btn", "btn-outline-success", {"d-none": !this.state.updateProduct})}  data-toggle="modal" data-target="#resultModal" onClick={ () => {this.updateProduct(this.state.selectdID);} } ><b>Lưu</b></button>
							    </div>
							</div>
						</div>
					</div>
					<div className="modal fade" id="warningModal">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
							    <div className="modal-body">
							        <h4 className="text-center mt-4">Bạn có chắc muốn xóa?</h4>
							        <button type="submit" className="btn btn-outline-danger m-4 pl-4 pr-4" data-toggle="modal" data-target="#resultModal" onClick={ this.onDeleteProduct } ><b>Xóa</b></button>
							        <button type="button" className="btn btn-outline-info m-4 float-right pl-4 pr-4" data-dismiss="modal"><b>Hủy</b></button>
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
				    	className = "-highlight text-center"
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
		token: state.user.token,
	}
}

export default connect(mapStateToProps, null)(Products);