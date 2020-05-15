import React from "react";
import "./Pharmisict.css";
import "../stock/util.css";
import { Helmet } from "react-helmet";
import Popup from '../common/popup';
import Header from "../common/Header";
import NavPharmacist from "./NavPharmacist";
import Footer from "../common/Footer";

class Pharmisict extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            supplier_data: [],
            selected_data: [],
            main_data: {},
            isLoaded: true,
            error: null
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }


    searchSuplier = (supplierName) => {
        console.log("Follow me");
        fetch("http://localhost:8762/product-managment-service/product/allproducts").then(
            response => {
                console.log("Fetched Json data url");
                if (response.ok) {
                    response.json().then(json_response => {
                        console.log("inside fetch----->");
                        console.log(json_response);

                        this.setState({
                            supplier_data: json_response,
                            main_data: {},
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
                            supplier_data: [],
                            main_data: {},
                        });
                        console.log("data trasnfer done");
                    });
                }

            },
            error => {
                console.log("inside error ----->");
                this.setState({
                    isLoaded: false,
                    error: { message: "Ajax error, URL might be wrong! or unreacheable, check console" },
                    supplier_data: [],
                    main_data: {}
                });
                console.log("Error side ,data trasnfer done");
                console.log(this.state.supplier_data);
            }
        );
    };

    // ---------------<<<<<<<<<<

    addRow = (pName, pId, pQuantity) => {
        var selected_data = this.state.selected_data
        selected_data.push({ 'pName': pName, 'pId': pId, 'pQuantity': pQuantity })
        this.setState({ selected_data: selected_data })
        console.log(selected_data);

    };

    handleSubmit = () => alert("Submitted");

    handleStatusChange = event => {
        this.setState({ select: event.target.value })
    };

    handleReset = event => alert("Resetted");

    render() {
        return (

            <div class="Parent_error_class">
                <Header></Header>
                <NavPharmacist></NavPharmacist>
                <div className="application">
                    <head>
                        <Helmet>
                            <title>Pharmisict Page</title>
                            <meta charset="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />

                        </Helmet>
                    </head>
                </div>

                <br></br><br></br><br></br>
                <h2>SALES</h2>
                <br></br><br></br><br></br><br></br><br></br>
                <form class="example" action="/action_page.php" style={{ margin: "auto", maxWidth: "500px" }} >
                    <input type="text" id="supplierName" placeholder="Search Products" name="search" />
                    <button type="button" onClick={() => this.searchSuplier(document.getElementById("supplierName").value)}>
                        <i className="fa fa-search"></i>
                    </button>
                </form>

                <br></br><br></br>
                <div class="limiter">
                    <div class="container-table100">
                        <div class="wrap-table100">

                            <div class="table100 ver2 m-b-110">
                                <div class="table100-head">
                                    <table>
                                        <thead>
                                            <tr class="row100 head">
                                                <th class="cell100 column1">Product ID</th>
                                                <th class="cell100 column2">Product Name</th>
                                                <th class="cell100 column3">Available Quantity</th>
 
                                                <th class="cell100 column4">Add Product</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                                <div class="table100-body js-pscroll">
                                    <table>
                                        <tbody>
                                            {
                                                this.state.supplier_data.map(supplier => (
                                                    <tr key={supplier.pId} align="start">
                                                        <td class="cell100 column1" >{supplier.pId}</td>
                                                        <td class="cell100 column2" id="pName" >{supplier.pName}</td>
                                                        <td class="cell100 column3" >{supplier.pQuantity}</td>
                                                        
                                                        <td class="cell100 column4" ><button class="addbtn" ref={btn => { this.btn = btn; }} onClick={() => this.addRow(supplier.pName, supplier.pId, supplier.pQuantity)}>ADD</button></td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <br></br><br></br><br></br>
                            <h4>Selected Order Details</h4>
                            <br></br><br></br>
                            <div class="table100 ver5 m-b-110">
                                <div class="table100-head">
                                    <table>
                                        <thead>
                                            <tr class="row100 head">
                                                <th class="cell100 column1">Product Name</th>
                                                <th class="cell100 column2">Availabe Quantity</th>
                                                <th class="cell100 column3">Place Quantity</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                                <div class="table100-body js-pscroll">
                                    <table>
                                        <tbody>
                                            {
                                                this.state.selected_data.map(supply => (
                                                    <tr key={supply.pId} align="start" class="row100 body">
                                                        <td class="cell100 column1" >{supply.pName}</td>
                                                        <td class="cell100 column2"  >{supply.pQuantity}</td>
                                                        <td class="cell100 column3" id="quantsel"  ><input type="number" id="quantity_selector" name="quantity" min="1" max="5" /></td>
                                                    </tr>
                                                ))
                                            }


                                        </tbody>
                                    </table>
                                    <div>
                                        <button class="btn2 placeorder" onClick={this.togglePopup.bind(this)} >Place Order</button>
                                        {this.state.showPopup ?
                                            <Popup
                                                text=' The order have been placed succesfully '
                                                closePopup={this.togglePopup.bind(this)}
                                            />
                                            : null
                                        }
                                    </div>

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
                <Footer/>
            </div>

        );

    }


}
export default Pharmisict;  