import React from "react";
import {Link } from "react-router-dom";
import Footer from "./Footer"; //refer to Footer.js
import Header from "./Header";
import NavStock from "../stock/NavStock";
import NavAdmin from "../admin/NavAdmin";
import NavPharmacist from "../pharmacist/NavPharmacist";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          user_data: [],
          user_count: 0, 
          user_index:0,
          role_data: [],
          role_count: 0, 
          role_index:0,
          isLoaded: false,
          error: null    
    }
  }

//--------------------------------------------Show role------------------------------------------------------------------------
showRoles=()=>{
  fetch('http://localhost:8762/user-managment-service/roles/get_roles')
  .then(
      (response)=> {
          if (response.ok)
          {
              response.json().then(json_response => {
                  console.log(json_response)
                  this.setState({
                    role_data:json_response,
                    role_count:json_response.length,
                    role_index:0,
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
                       role_data: {},
                       role_count:0,
                       role_index:0,
                   });
               })
           }
       },
       (error) => {
           this.setState({
               isLoaded: false,
               error: {message:"AJAX error, URL wrong or unreachable, see console"}, // save the AJAX error in state for display below
               role_data: {},
               role_count:0,
               role_index:0,
           });
       })
}
showNav=(rid)=>{
if(rid===1)
{return <NavAdmin/>}
else if(rid===2)
{return <NavStock/>}
else {return <NavPharmacist/>}
}

          //--------------------------------------search user----------------------------------------------------------------------------
//------------------------------------------To serach user function----------------------------------------------------------
componentDidMount() {
    
  this.showRoles();
}

//--------------------------------------update User-------------------------------------------------------------------------------
updateUser = (userId,userName,email,phoneNumber,address,password,roleId) => {
  // , sId:parseInt(sid) 
  fetch('http://localhost:8762/user-managment-service/users/add_user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId:userId,userName:userName,email:email,contactNo:phoneNumber,address:address,password:password,roleId:parseInt(roleId)}),
        })
    };

    render() {
        const loginData = JSON.parse(localStorage.getItem('loginData'));
    console.log('horray!!', loginData);
      const options=[];
      for(let i=0;i<this.state.role_count;i++)
      {
          options.push(
          <option value={this.state.role_data[i].roleId} key={i}>{this.state.role_data[i].roleName}</option>
          )
      }
        return (

<div class="Parent_error_class">
                <Header/>
                {this.showNav(loginData.role.roleId)}
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
                <h2>PROFILE</h2>
                <br></br><br></br>
                <Link to={{pathname:`/changepassword`}}><a href="#">Change Password</a></Link>
                <br></br><br></br>
              
               <label htmlFor="address"><b> Address: </b> </label>
             <input type="text" id="address" required defaultValue={loginData.address}/>
              <br/><br/>
               <label htmlFor="phoneNumber"><b>Phone Number: </b> </label>
             <input type="text" id="phoneNumber" required defaultValue={loginData.contactNo}  />
               <br/><br/>
               <Link to={{pathname:`/stockmain`}}><button type="submit" onClick={() => this.updateUser(loginData.userId,loginData.userName,loginData.email,document.getElementById('phoneNumber').value,document.getElementById('address').value,loginData.password,loginData.role.roleId)}>
                Update</button></Link>
                <button type="cancel">Cancel</button>
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
export default Profile;












