import React, { Component } from 'react';
import HeadNav from './components/Nav/HeadNav';
import SideBar from './components/Nav/SideBar';
import Materials from './components/Storage/Materials';
import Products from './components/Storage/Products';
// import Login from './components/Login/Login';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        // const Cate = window(this.props.category);
        var cate ;
        if (this.props.category === 'Materials') cate = <Materials />;
        else if (this.props.category === 'Products') cate = <Products />;

        return (
            <div className="h-100">
                <div className="col-sm-12 container-fluid head-nav">
                    <HeadNav />
                </div>
                <div className="row">
                    <div className="col-sm-2 pr-0 d-inline-block bg-dark" style={{"minHeight": "95vh"}}>
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

const mapStateToProps = (state) => {
    return {
        category: state.category
    }
};

export default connect(mapStateToProps, null)(App);
