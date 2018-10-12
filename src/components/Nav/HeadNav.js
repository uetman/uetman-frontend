import React, { Component } from 'react';

class HeadNav extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        // let elements = this.state.category_list.map((cate, index) => {
        //     if(cate.subCategory.length === 0) 
        //         return  (<li className="nav-item" key={index}>
        //                     <a href="#" className="nav-link active">{cate.name}</a>
        //                 </li>
        //                 );
        //     else {
        //         let sub_cate = cate.subCategory.map((subCate, index) => {
        //             return  (<a className="dropdown-item" href="#" key={index}>{subCate}</a>)
        //         });
        //         return  (<li className="nav-item dropdown" key={index}>
        //                     <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">{cate.name}</a>
        //                     <div className="dropdown-menu">
        //                         {sub_cate}
        //                     </div>
        //                 </li>
        //             )
        //     }
        // });


        return (                    

            <div className="row flex-row d-flex">
                <span id="slogan" className="pl-4">UETman</span>
                {/*<ul className="nav nav-tabs col-lg-7"> */}
                    {/*{elements}*/}
                    {/*<li className="nav-item">
                        <a href="#" className="nav-link active">Active</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Action</a>
                        </div>
                    </li>*/}
                {/*</ul>                */}
                <div className="ml-auto pr-6 head-nav-content">{/*<i className="fa fa-envelope float-right head-nav-content" aria-hidden="true"></i>*/} <span className="align-middle pr-5 text-bottom">Welcome: { }</span> </div>
            </div>
        );
    }
}

export default HeadNav;