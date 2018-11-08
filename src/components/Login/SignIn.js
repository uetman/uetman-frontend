import React, { Component } from 'react';
import  "./../../css/signIn.css"
import { connect } from 'react-redux';
import * as actions from './../../redux/actions';
import * as apiServer from './../../API/api';

const API = (apiServer.API_ref + "auth/signin/");

class SignIn extends Component{
	constructor(props) {
		super(props);
		this.state = {
            error: null,
            isLoaded: false,
            data: null,
        };
	}

	requestLogin(username, pass) {
		fetch(API, { 
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "password": pass,
                "username": username
            })
        }).then(res => res.json()).then(
            (result) => {
                if(result.error === undefined)
	                this.props.defineUser({
	                    username: result.username,
	                    token: result.token_type + " " + result.access_token
	                });
            },
            (error) => {
                console.log(error);
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
	}

	render(){
		return(
			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<div className="login100-pic js-tilt" data-tilt>
							<img src={require('./../../css/media/img-01.png')} alt="img"/>
						</div>

						<div className="login100-form validate-form">
							<span className="login100-form-title">
								Member Login
							</span>

							<div className="wrap-input100 validate-input">
								<input className="input100" type="text" placeholder="Username" ref="userName"/>
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<i className="fa fa-envelope" aria-hidden="true"></i>
								</span>
							</div>

							<div className="wrap-input100 validate-input" data-validate = "Password is required">
								<input className="input100" type="password" placeholder="Password" ref="passWord"/>
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<i className="fa fa-lock" aria-hidden="true"></i>
								</span>
							</div>
							
							<div className="container-login100-form-btn">
								<button className="login100-form-btn" onClick={ () => { this.requestLogin(this.refs.userName.value, this.refs.passWord.value) } }>
									Login
								</button>
							</div>

							{/*<div className="text-center p-t-12">
								<span className="txt1">
									Forgot
								</span>
								<a className="txt2" href="#">
									Username / Password?
								</a>
							</div>*/}

							{/*<div className="text-center p-t-136">
								<a className="txt2" href="#">
									Create your Account
									<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
								</a>
							</div>*/}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
} 

const mapDispatchToProps = (dispatch, props) => {
    return {
        defineUser: (user) => {
            dispatch(actions.defineUser(user));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);