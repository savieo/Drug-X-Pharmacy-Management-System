import React from "react";
import "./StockList.css";
import "./util.css";
import Popup from '../common/popup';
import Header from "../common/Header";
import NavStock from "./NavStock";
import Footer from "../common/Footer";

class StockList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            showPopup: false,
            supplier_data: [],
            supplier_ids: [],
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

    componentDidMount() {

        console.log("SUpplier id fetch");
        fetch("http://localhost:8762/supplier-managment-service/supplier/allSupplier").then(
            response => {
                console.log(response);
                if (response.ok) {
                    response.json().then(json_response => {
                        console.log(json_response);
                        this.setState({
                            supplier_ids: json_response,
                            isLoaded: true,
                            error: null
                        });
                        console.log("supplier ids");
                        console.log(this.state.supplier_ids);
                    });
                } else {
                    // handle errors, for example 404
                    response.json().then(json_response => {
                        this.setState({
                            isLoaded: false,
                            error: json_response,
                            supplier_ids: {},

                        });
                    });
                }
            },

            error => {
                this.setState({
                    isLoaded: false,
                    error: {
                        message: "AJAX error in main fetch, URL wrong or unreachable, see console"
                    },
                    supplier_ids: {},
                });
            }
        );
    }



    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    searchSuplier = (Suplierid) => {

        fetch("http://localhost:8762/product-managment-service/product/productbysupplier?sid=" + Suplierid).then(
            response => {

                if (response.ok) {
                    response.json().then(json_response => {
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

    addRow = (pName, pId, pQuantity) => {
        var selected_data = this.state.selected_data
        selected_data.push({ 'pName': pName, 'pId': pId, 'pQuantity': pQuantity })
        this.setState({ selected_data: selected_data })

    };

    handleSubmit = () => alert("Submitted");
    handleStatusChange = event => {
        this.setState({ select: event.target.value })
    };
    handleReset = event => alert("Resetted");

    render() {
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


                <br></br><br></br><br></br>
                <h2>STOCK LIST</h2>
                <br></br><br></br><br></br><br></br>
                <form style={{ margin: "auto", maxWidth: "500px" }} >
                    <div class="dropdown">
                        <button class="dropbtn" type="submit">
                            Search Suppliers
                    </button>
                        <div class="dropdown-content">
                            {
                                this.state.supplier_ids.map(ids => (
                                    <a key={ids.supplierId} align="start" id="dropdown" value={ids.supplierId} onClick={() => this.searchSuplier(ids.supplierId)}>{ids.supplierName} </a>
                                ))
                            }
                        </div>

                    </div>
                </form>

                <br></br><br></br><br></br>
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
                                                <th class="cell100 column3">Quantity</th>
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
                                                        {/* document.getElementById("pName").innerHTML */}
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
                                                <th class="cell100 column2">Quantity</th>
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
                                                    </tr>
                                                ))
                                            }


                                        </tbody>
                                    </table>
                                    <div>
                                        <button class="btn2 placeorder" onClick={this.togglePopup.bind(this)} >Place Order</button>
                                        {this.state.showPopup ?
                                            <Popup
                                                text=' Your Order have been placed succesfully '
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
export default StockList;