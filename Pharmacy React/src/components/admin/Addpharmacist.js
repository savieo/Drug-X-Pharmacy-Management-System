import React from "react";
import Footer from "../common/Footer"; //refer to Footer.js
import Header from "../common/Header";
import NavAdmin from "./NavAdmin";
import {Link } from "react-router-dom";
//import pharmacist from './public/pharmacist.jpg';

class Addpharmacist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          _data: [], 
          roles_index: 0, 
          roles_count: 0, 
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
                    roles_data:json_response,
                    roles_count:json_response.length,
                    roles_index:0,
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
                       roles_data: {},
                       roles_count:0,
                       roles_index:0,
                   });
               })
           }
       },
       (error) => {
           this.setState({
               isLoaded: false,
               error: {message:"AJAX error, URL wrong or unreachable, see console"}, // save the AJAX error in state for display below
               roles_data: {},
               roles_count:0,
               roles_index:0,
           });
       })
}
//------------------------------------------To call showsrole function----------------------------------------------------------
componentDidMount() {
  this.showRoles();
}

//--------------------------------------Add user-------------------------------------------------------------------------------
addUser = (userName,email,phoneNumber,address,password,roleId) => {

    // , sId:parseInt(sid) 
    fetch('http://localhost:8762/user-managment-service/users/add_user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName:userName,email:email,contactNo:phoneNumber,address:address,password:password,roleId:parseInt(roleId)}),
          })
        };
        
      
    

    render() {
      const options=[];
      for(let i=0;i<this.state.roles_count;i++)
      {
          options.push(
          <option value={this.state.roles_data[i].roleId} key={i}>{this.state.roles_data[i].roleName}</option>
          )
      }
        return (

<div class="Parent_error_class">
                <Header/>
                <NavAdmin/>
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
                <h2>ADD USER</h2>
                <br></br>
                <br></br>
              <br></br>
              <label htmlFor="roles"><b>Roles : </b></label>
                <select className="input" id="roles">
                {options}
                </select>
                <br/><br/>
           <label htmlFor="username"><b> UserName: </b></label>
             <input type="text" id="userName" required  />
               <br/><br/>
               <label htmlFor="email"><b> Email: </b></label>
             <input type="email" id="email" required />
               <br/><br/>
               <label htmlFor="password"><b> Password: </b></label>
             <input type="password" id="password" required />
               <br/><br/>
               <label htmlFor="address"><b> Address: </b></label>
             <input type="text" id="address" required/>
               <br/><br/>
               <label htmlFor="phoneNumber"><b> Phone Number: </b> </label>
             <input type="text" id="phoneNumber" required/>
              <br/><br/>
                <button type="submit" onClick={() => this.addUser(document.getElementById("userName").value,document.getElementById("email").value,document.getElementById("phoneNumber").value,document.getElementById("address").value,document.getElementById("password").value,document.getElementById("roles").value)}>Add</button>
                <Link to="/adminmain"><button type="cancel" >Cancel</button></Link>
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
export default Addpharmacist;












