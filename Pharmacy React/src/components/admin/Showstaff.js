import React from "react";
//import pharmacist from './public/pharmacist.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Helmet } from "react-helmet";
import 'font-awesome/css/font-awesome.min.css';
import {Link } from "react-router-dom";

class Showstaff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_data: [], 
            customer_index: 0, 
            customer_count: 0, 
            isLoaded: false, 
            error: null 
        };
    }
//----------------------------------------------Show all Customer------------------------------------------------------------------- 
showCustomer = () => {
        fetch('http://localhost:8762/user-managment-service/users/get_users').then(
            response => {
                if (response.ok) {     
                    response.json().then(json_response => {
                        console.log(json_response);
                        this.setState({
                            customer_data: json_response,
                            customer_count: json_response.length, 
                            customer_index: 0, 
                            isLoaded: true, 
                            error: null 
                        });
                    });
                } 
                else {
                    response.json().then(json_response => {
                        this.setState({
                            isLoaded: false,
                            error: json_response, 
                            customer_data: {}, 
                            customer_count: 0,
                            customer_index: 0
                        });
                    });
                }
            },

            error => {
              
                this.setState({
                    isLoaded: false,
                    error: {
                        message:
                            "AJAX error, URL wrong or unreachable, see console"
                    }, 
                    customer_data: {}, 
                    customer_count: 0,
                    customer_index: 0
                });
            }
        );
    }
//--------------------------------------search supplier----------------------------------------------------------------------------
searchUser = (id) => {
    fetch('http://localhost:8762/user-managment-service/users/search_userid?userId='+id,{
        method: "GET"
    }).then(
        response => {
            if (response.ok) {     
                response.json().then(json_response => {
                    console.log(json_response);
                    this.setState({
                        customer_data: json_response,
                        customer_count: json_response.length, 
                        customer_index: 0, 
                        isLoaded: true, 
                        error: null 
                    });
                });
            } 
            else {
                response.json().then(json_response => {
                    this.setState({
                        isLoaded: false,
                        error: json_response, 
                        customer_data: {}, 
                        customer_count: 0,
                        customer_index: 0
                    });
                });
            }
        },

        error => {
          
            this.setState({
                isLoaded: false,
                error: {
                    message:
                        "AJAX error, URL wrong or unreachable, see console"
                }, 
                customer_data: {}, 
                customer_count: 0,
                customer_index: 0
            });
        }
    );
}

//--------------TO DELETE A PRODUCT------------------------------------------
delete=(id)=>{
    fetch("http://localhost:8762/user-managment-service/users/delete_user/" + id, {
        method: "DELETE"
    });
}
//------------------------------------------------------------CALL SHOW Customer---------------------------------------------------------------------
    componentDidMount(){
        this.showCustomer();
    }
//----------------------------------------------------------------DELETE----------------------------------------------------------------
    render() {
        const rows=[];
                for(let i=0;i<this.state. customer_count;i++)
                {
                    rows.push(
                        <tr key={this.state. customer_data[i].userId} align="start">
                        <td className="cell100 column1"  >{this.state. customer_data[i].userId}</td>
                        <td className="cell100 column2" id="pName" >{this.state. customer_data[i].userName}</td>
                        <td className="cell100 column3" ><i className="fa fa-trash" aria-hidden="true" onClick={()=>this.delete(this.state.customer_data[i].userId)}  style={{padding:"10px"}}></i>
  <Link to={{pathname:`/PharmacistProfile/${this.state.customer_data[i].userId}`}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link></td>                        {/* document.getElementById("pName").innerHTML */}
                    </tr>
                    )
                }
        return (
            <div className="Parent_error_class">
                <div className="application">
                    <div>
                        <Helmet>
                            <title>Product List</title>
                            <meta charset="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <link rel="icon" type="image/png" href='/public/images/icons/favicon.ico' />
                            <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
                            <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
                            <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
                            <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
                            <link rel="stylesheet" type="text/css" href="vendor/perfect-scrollbar/perfect-scrollbar.css" />
                            <link rel="stylesheet" type="text/css" href="css/util.css" />
                            <link rel="stylesheet" type="text/css" href="css/main.css" />
                        </Helmet>
                    </div>
                </div>
{/*--------------------------search User--------------------------   */}
<br></br><br></br><br></br>
                <h2>Staff Members</h2>
                <br></br><br></br>
                <form className="example" action="#" style={{ margin: "auto", maxWidth: "500px" }} >
                <input type="text" id="searchcustomer" placeholder="Search Staff" name="search" />
                    <button type="button" onClick={() => this.searchUser(document.getElementById("searchcustomer").value)}>
                        <i className="fa fa-search" ></i>
                    </button>
                </form>

                <br></br><br></br>
                <div className="limiter">
                    <div className="container-table100">
                        <div className="wrap-table100">

                            <div className="table100 ver2 m-b-110">
                                <div className="table100-head">
                                    <table>
                                        <thead>
                                            <tr className="row100 head">
                                                <th className="cell100 column1" >User Id</th>
                                                <th className="cell100 column2">User Name</th>
                                                <th className="cell100 column4">Action</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                                <div className="table100-body js-pscroll">
                                    <table>
                                        <tbody>
                                            {rows}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <Link to="/adduser"><button class="btn2 placeorder" >Add User</button></Link>
                        </div>
                    </div>
                </div>

                <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
                <script src="vendor/bootstrap/js/popper.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
                <script src="vendor/select2/select2.min.js"></script>
                <script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
                <script src="js/main.js"></script>

            </div>

        );
            
        
    }
}

    
export default Showstaff;












