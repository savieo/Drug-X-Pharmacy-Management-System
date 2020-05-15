import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavStock from "../stock/NavStock";
import {Link } from "react-router-dom";
// import { Button } from 'react-native';
// import { Form, TextValidator } from 'react-native-validator-form';
class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_data: [],
            user_count: 0, 
            user_index:0,
            isLoaded: false,
            error: null    
      }
    }

    
//--------------------------------------update User-------------------------------------------------------------------------------
updateUser = (userId,userName,email,phoneNumber,address,Password,roleId) => {
    // , sId:parseInt(sid) 
    fetch('http://localhost:8762/user-managment-service/users/add_user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId:userId,userName:userName,email:email,contactNo:phoneNumber,address:address,password:Password,roleId:parseInt(roleId)}),
          }).then(
            (response)=> {
                if (response.ok)
                {
                    response.json().then(json_response => {
                        console.log(json_response)
                        this.setState({
                            user_data:json_response,
                            user_count:json_response.length,
                            user_index:0,
                             isLoaded : true,
                             error : null
                         })
                     })
                }
                else
                {
                    response.json().then(json_response => {
                         this.setState({
                             isLoaded: false,
                             error:json_response,
                             user_data: {},
                             user_data: {},
                             user_count:0,
                             user_index:0,
                         });
                     })
                 }
             },
             (error) => {
                 this.setState({
                     isLoaded: false,
                     error: {message:"AJAX error, URL wrong or unreachable, see console"}, // save the AJAX error in state for display below
                     user_data: {},
                     user_count:0,
                     user_index:0,
                 });
             })
      
      };
//------------------------------------------ user function----------------------------------------------------------
/*
      componentWillMount() {
        this.updateUser(this.props.match.params.uid);
      }
*/
render() {
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    return (

        <div class="Parent_error_class">
        <Header/>
        <NavStock/>
    <div className="application">
                <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
                <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
                <link rel="stylesheet" type="text/css" href="vendor/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" type="text/css" href="css/util.css" />
                <link rel="stylesheet" type="text/css" href="css/main.css" />
    </div>
    <div class="limiter">
        <br></br><br></br><br></br><br></br>
    <div class="container-table100">
                <div class="wrap-table100">
            <div class="table100 ver2 m-b-110">                
    <form className="form-group" action="" style={{ margin: "auto", maxWidth: "500px" }}>
        <br></br><br></br>
            <h2>Change Password</h2>
          <br></br>
           <label><b>
           Change Password: </b></label>
            <input type="password"  id="Password" required/>
           <br/><br/>
           <label><b>
           Confirm Password: </b></label>
            <input type="password" id="Password1" required/>
           <br/><br/>
            <button type="submit" className="report_button" onClick={() => 
                document.getElementById('Password').value===document.getElementById('Password').value?
                this.updateUser(loginData.userId,loginData.userName,loginData.email,document.getElementById('Password').value,loginData.address,loginData.role):useHistory.push('/changepassword')}>
                Change Password</button>
                <Link to="/profile"><button type="cancel" >Cancel</button></Link>
            </form>
            <br></br><br></br><br></br><br></br>
            </div>
            </div>
            </div>
            </div>
            <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
                <script src="vendor/bootstrap/js/popper.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
                <script src="vendor/select2/select2.min.js"></script>
                <script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
                <script src="js/main.js"></script>
                <Footer/>
            </div>
    );
}
}

export default ChangePassword;












