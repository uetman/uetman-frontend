import React, { Component } from 'react';
import HeadNav from './components/Nav/HeadNav';
import SideBar from './components/Nav/SideBar';
import Materials from './components/Storage/Materials';
import Products from './components/Storage/Products';
import Home from './components/Home/Home';
import SignIn from './components/Login/SignIn';
// import SignUp from './components/Login/SignUp';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("asjdfbjakbsf")
    //   this.setState({ logged: nextProps.logged });  
    // }

    render() {     
        if (!this.props.logged) {
            return(<div><SignIn/></div>);
        } else {
            var cate;
            switch(this.props.page) {
                default:
                    break;
                case 'Home':
                    cate = <Home />;
                    break;
                case 'Materials':
                    cate = <Materials />;
                    break;
                case 'Products':
                    cate = <Products />;
                    break;
            }
            return (
                <div className="h-100">
                    <div className="col-sm-12 container-fluid head-nav">
                        <HeadNav />
                    </div>
                    <div className="row">
                        <div className="col-sm-2 pr-0 d-inline-block side-bar-root" style={{"minHeight": "95vh"}}>
                            <SideBar />
                        </div>
                        <div className="col-sm-10 d-inline-block">
                            {cate}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        logged: state.user.logged,
    }
};

export default connect(mapStateToProps, null)(App);
