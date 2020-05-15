import React from "react";
//import pharmacist from './public/pharmacist.jpg';
import styles from "../stock/StockList.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Helmet } from "react-helmet";
import 'font-awesome/css/font-awesome.min.css';
import {Link } from "react-router-dom";

class Availableproduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_data: [], 
            product_index: 0, 
            product_count: 0, 
            isLoaded: false, 
            error: null 
        };
    }
//----------------------------------------------Show all products------------------------------------------------------------------- 
    allProduct = () => {
        fetch('http://localhost:8762/product-managment-service/product/allproductsavailableforsale').then(
            response => {
                if (response.ok) {     
                    response.json().then(json_response => {
                        console.log(json_response);
                        this.setState({
                            product_data: json_response,
                            product_count: json_response.length, 
                            product_index: 0, 
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
                            product_data: {}, 
                            product_count: 0,
                            product_index: 0
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
                    product_data: {}, 
                    product_count: 0,
                    product_index: 0
                });
            }
        );
    }
    
//--------------------------------------search product----------------------------------------------------------------------------
searchProduct = (product_name) => {
    fetch('http://localhost:8762/product-managment-service/product/searchproductsavailableforsale?search'+product_name,{
        method: "GET"
    }).then(
        response => {
            if (response.ok) {     
                response.json().then(json_response => {
                    console.log(json_response);
                    this.setState({
                        product_data: json_response,
                        product_count: json_response.length, 
                        product_index: 0, 
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
                        product_data: {}, 
                        product_count: 0,
                        product_index: 0
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
                product_data: {}, 
                product_count: 0,
                product_index: 0
            });
        }
    );
}
//--------------TO DELETE A PRODUCT------------------------------------------
delete=(id)=>{
    fetch("http://localhost:8762/product-managment-service/product/deleteproduct/" + id, {
        method: "DELETE"
    });
}
//---------------------------------------------------------------------------------------------------------------------------------
    componentDidMount(){
        this.allProduct();
    }
//--------------------------------------------------------------------------------------------------------------------------------
    render() {
        const rows=[];

                for(let i=0;i<this.state.product_count;i++)
                {
                    rows.push(
                        <tr key={this.state.product_data[i].pId} align="start">
                        <td className="cell100 column1" >{this.state.product_data[i].pId}</td>
                        <td className="cell100 column2" id="pName" >{this.state.product_data[i].pName}</td>
                        <td className="cell100 column3" ></td>
                        {/* document.getElementById("pName").innerHTML */}
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

                <br></br><br></br><br></br>
                <h2>PRODUCT LIST</h2>
                <br></br><br></br>
                <form className="example" action="/action_page.php" style={{ margin: "auto", maxWidth: "500px" }} >
                    <input type="text" id="productname" placeholder="Search product" name="search" />
                    <button type="button" onClick={() => this.searchProduct(document.getElementById("productname").value)}>
                        <i className="fa fa-search" ></i>
                    </button>
                </form>
                <div className="limiter">
                    <div className="container-table100">
                        <div className="wrap-table100">

                            <div className="table100 ver2 m-b-110">
                                <div className="table100-head">
                                    <table>
                                        <thead>
                                            <tr className="row100 head" >
                                                <th className="cell100 column1">Product ID</th>
                                                <th className="cell100 column2">Product Name</th>
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

    
export default Availableproduct;












