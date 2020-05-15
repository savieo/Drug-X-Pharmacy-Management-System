import React from "react";
import styles from "./StockList.css";
import Footer from "../common/Footer"; //refer to Footer.js
import Header from "../common/Header";
import NavStock from "./NavStock";
import NavAdmin from "../admin/NavAdmin";
import NavPharmacist from "../pharmacist/NavPharmacist";
import {Link } from "react-router-dom";

class Addsupplier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          supplier_data: [], 
          supplier_index: 0, 
          supplier_count: 0, 
          isLoaded: false,
          error: null    
    }
  }
  
  showNav=(rid)=>{
    if(rid===1)
    {return <NavAdmin/>}
    else if(rid===2)
    {return <NavStock/>}
    else {return <NavPharmacist/>}
    }
//--------------------------------------Add Supplier-------------------------------------------------------------------------------
addSupplier = (name,PhoneNumber,Address,Email,License ) => {

    // , sId:parseInt(sid) 
    fetch('http://localhost:8762/supplier-managment-service/supplier/addSupplier', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ supplierName:name,contactNo:PhoneNumber,ddress:Address,mail:Email,license:License }),
          })
          .then(
            (response)=> {
                if (response.ok)
                {
                    response.json().then(json_response => {
                        console.log(json_response)
                        this.setState({
                          supplier_data:json_response,
                          supplier_count:json_response.length,
                          supplier_index:0,
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
                             supplier_data: {},
                             supplier_count:0,
                             supplier_index:0,
                         });
                     })
                 }
             },
             (error) => {
                 this.setState({
                     isLoaded: false,
                     error: {message:"AJAX error, URL wrong or unreachable, see console"}, // save the AJAX error in state for display below
                     supplier_data: {},
                     supplier_count:0,
                     supplier_index:0,
                 });
             })
        };
        
      
    render() {
        const loginData = JSON.parse(localStorage.getItem('loginData'));
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
                            <form className="form-group" style={{ margin: "auto", maxWidth: "450px" }}>
                                <h1>Add Supplier</h1>
                                <br></br><br></br>
                                <div>
                                    <label htmlFor="name"><b>Name: </b></label>
                                    <input type="text"  id="name" required/><br/><br/>
                                </div>
                                <div>
                                    <label htmlFor="PhoneNumber"><b>Phone Number: </b> </label>
                                    <input type="text" id="PhoneNumber" required/><br></br><br></br>
                                </div>
                                <div>
                                    <label htmlFor="Address"><b>Address: </b> </label>
                                    <input type="text" id="Address" required/>
                                    <br></br><br></br>
                                </div>
                                <div>
                                    <label htmlFor="Email"><b> Email: </b> </label>
                                    <input type="email" id="Email" required/>
                                    <br></br><br></br>
                                </div>
                                <div>
                                    <label htmlFor="License"><b> License: </b> </label>
                                    <input type="text" id="License" required/>
                                    <br></br><br></br>
                                </div>
                                <div>
                                    <button type="submit"onClick={() => this.addSupplier(document.getElementById('name').value,document.getElementById('PhoneNumber').value,document.getElementById('Address').value,document.getElementById('Email').value,document.getElementById('License').value )}>
                                     Add</button>
                                    <button type="cancel">Cancel</button>
                                </div>
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
        )
    }
}


export default Addsupplier;












