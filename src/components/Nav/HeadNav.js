import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../redux/actions';

class HeadNav extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (                    

            <div className="row flex-row d-flex">
                <div id="slogan" className="pl-4" onClick={ () => {this.props.onChanggePage("Home")} }>{/*<img src={require('./../../logo/logo.png')} id="logo" />*/}<span className="rainbow">ᑌETᗰᗩᑎ</span><span className="rainbow2">{this.props.page}</span></div>
                <div className="ml-auto pr-3 head-nav-content"> <span className="align-middle pr-2 rainbow">Welcome back <b>{ this.props.username }</b></span> </div>
                <div className="pr-3" onClick={() => {this.props.onSignOut()} }><i className="fas fa-sign-out-alt log-out"></i></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username,
        page: state.page
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChanggePage: (page) => {
            dispatch(actions.changePage(page));
        },
        onSignOut: () => {
            dispatch(actions.eraseUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadNav);