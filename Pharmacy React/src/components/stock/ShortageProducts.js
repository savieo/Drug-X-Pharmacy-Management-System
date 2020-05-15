import React from "react";
import styles from "./StockList.css";
import "./util.css";
import {Link } from "react-router-dom";
// import Script from "react-inline-script"
// import Confirm from "./Confirm.js"

class ShortageProducts extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { username: "Savieo" };
        console.log("Supplier response below ---------@");
        console.log("Hi savio, am your assistant");
        this.state = {
            products_data: [],
            main_data: {},
            isLoaded: true,
            error: null
        };
    }

    // --------------->>>>>>>>>>

    showProducts = () => {
        console.log("Follow me");
        // http://localhost:8080/product/productbysupplier?sid=1
        fetch("http://localhost:8762/product-managment-service/product/allproductsbyquantity").then(
            response => {
                console.log("Fetched Json data url");
                if (response.ok) {
                    response.json().then(json_response => {
                        console.log("inside fetch----->");
                        console.log(json_response);

                        this.setState({
                            products_data: json_response,
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
                            products_data: [],
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
                    products_data: [],
                    main_data: {}
                });
                console.log("Error side ,data trasnfer done");
                console.log(this.state.products_data);
            }
        );
    };

    // ---------------<<<<<<<<<<

    // ---------------------------------------
    componentDidMount=()=>{
        this.showProducts();
    }

    render() {
        return (
            // const {error, isLoaded, posts} = this.state;
            <div class="Parent_error_class">
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
                <h2>LIMITED STOCK</h2>

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
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                                <div class="table100-body js-pscroll">
                                    <table>
                                        <tbody>
                                            {
                                                this.state.products_data.map(product => (
                                                    <tr key={product.pId} align="start">
                                                        <td class="cell100 column1" >{product.pId}</td>
                                                        <td class="cell100 column2" id="pName" >{product.pName}</td>
                                                        <td class="cell100 column3" >{product.pQuantity}</td>
                                                        {/* document.getElementById("pName").innerHTML */}
                                                    </tr>
                                                ))
                                            }

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
export default ShortageProducts;