import React, { Component } from 'react';
import HeadNav from './components/Nav/HeadNav';
import SideBar from './components/Nav/SideBar';
import Materials from './components/Storage/Materials';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="h-100">
                <div className="col-sm-12 container-fluid head-nav">
                    <HeadNav />
                </div>
                <div className="row">
                    <div className="col-sm-2 pr-0 d-inline-block bg-dark">
                        <SideBar />
                    </div>
                    <div className="col-sm-10 d-inline-block">
                        <Materials/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
