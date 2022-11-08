import React from 'react';
import WardSelection from './WardSelection';
import form from '../form.css';
const AddVoter = () => {

    return(
        <div className = "form-box">
            <form>
                <div>
                    <label>first name</label><br />
                    <input type="text" placeholder="first name..." name=""></input>                          
                </div>
                <div>
                    <label>middle name</label><br />
                    <input type="text" placeholder="middle name..." name=""></input>                          
                </div>
                <div>
                    <label>last name</label><br />
                    <input type="text" placeholder="last name..." name=""></input>                          
                </div>
                <div>
                    <label>ID Number</label><br />
                    <input type="text" placeholder="Enter ID..." name=""></input>                          
                </div>
                <div>
                    <label>D.O.B</label><br />
                    <input type="date" min="01/11/2004" name=""></input>                          
                </div>
                <div>
                    <label>Gender</label><br/>
                    <select name="gender">
                        <option value="male" name="">Male</option>
                        <option value="female" name="">Female</option>
                    </select>                       
                </div>
                <WardSelection />
            </form>
        </div>
    )
}

export default AddVoter;