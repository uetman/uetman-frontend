import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../redux/actions';
import * as apiServer from './../../API/api';

const API = (apiServer.API_ref + "auth/signin/");
// console.log(API);
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: null,
        };
    }

    componentDidMount() {
        fetch(API, { 
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "password": "123456",
                "username": "hoaithu"
            })
        }).then(res => res.json()).then(
            (result) => {
                // console.log(result);
                this.props.defineUser({
                    id: result.user_id,
                    token: result.token_type + " " + result.access_token
                });
                this.setState({
                    isLoaded: true,
                    data: result
                });
            },
            (error) => {
                console.log(error);
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        return <div />;
    }
    	
}

const mapStateToProps = (state) => {
    return {
        token: state.user
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        defineUser: (user) => {
            dispatch(actions.defineUser(user));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);