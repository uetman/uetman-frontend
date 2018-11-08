import React, { Component } from 'react';
import  "./../../css/signUp.css"
class SignUp extends Component {
    render() {
        return (
            <form action="" className="register">
            <h1>Registration</h1>
            <fieldset className="row1">
                <legend>Account Details
                </legend>
                <p>
                    <label>Email 
                    </label>
                    <input type="text"/>
                    <label>Password 
                    </label>
                    <input type="Password"/>
                </p>
                <p>
                    <label>Username 
                    </label>
                    <input type="text"/>
                    <label>Password 
                    </label>
                    <input type="Password"/>
                </p>

            </fieldset>

            <fieldset className="row2">
                <legend>Personal Details
                </legend>

                <p>
                    <label>Phone 
                    </label>
                    <input type="text" maxlength="11"/>
                </p>
                <p>
                    <label>Country 
                    </label>
                    <select>
                        <option value="1">VietNam</option>
                        <option value="2">Japan</option>
                        <option value="2">United States</option>
                    </select>
                </p>
                <p>
                    <label>Gender</label>
                    <input type="radio" value="radio" name ="inputGender"/>
                    <label className="gender">Male</label>
                    <input type="radio" value="radio" name ="inputGender"/>
                    <label className="gender">Female</label>
                </p>
                <p>
                    <label>Birthdate</label>
                    <input type="date" className="date" name="trip" value="1998-02-28" min="1940-01-01" max="2018-12-31" />
                    
                </p>
                
            </fieldset>
            
            <fieldset className="row3">
                <legend>Company Details
                </legend>

                <p>
                    <label>Organization</label>
                    <input type="text" />
                </p>
                <p>
                    <label>Address </label>
                    <input type="text" className="address" />
                </p>
                
            </fieldset>
            
            <div><button className="button">Register &raquo;</button></div>
        </form>
        );
    }
}
export default SignUp;