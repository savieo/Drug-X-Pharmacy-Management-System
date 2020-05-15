import React from "react";
import styles from "./StockList.css";
import {Link } from "react-router-dom";
import Footer from "../common/Footer"; //refer to Footer.js
import Header from "../common/Header";
import NavStock from "./NavStock";



class Updateproduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          supplier_data: [], 
          supplier_index: 0, 
          supplier_count: 0, 
          product_data: [],
            product_count: 0, 
            product_index:0,
          isLoaded: false,
          error: null    
    }
  }

//--------------------------------------------Show Supplier------------------------------------------------------------------------
showSuppliers=()=>{
  fetch('http://localhost:8762/supplier-managment-service/supplier/allSupplier')
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
}

////////------update product---------//////////////////////////////////

    
//--------------------------------------search product----------------------------------------------------------------------------
searchProduct = (id) => {
    fetch('http://localhost:8762/product-managment-service/product/searchproduct/'+id,{
        method: "GET"
    })
    .then(
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
//------------------------------------------To call showsuppler function----------------------------------------------------------
componentWillMount() {
    this.showSuppliers();
    this.searchProduct(this.props.match.params.product_id);
  }

//--------------------------------------update Product-------------------------------------------------------------------------------
updateProduct = (product_id,name,description,date,exp,quantity,costprice,sellingprice,sid) => {

    // , sId:parseInt(sid) 
    fetch('http://localhost:8762/product-managment-service/product/updateproduct/'+product_id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pName:name,pDescription:description,pManufactureDate:date,pExpiryDate:exp,pQuantity:quantity,pSellingPrice:sellingprice,pCostPrice:costprice,sId:parseInt(sid)}),
          })
      };
  
    render() {
      const options=[];
                for(let i=0;i<this.state.supplier_count;i++)
                {
                    options.push(
                    <option value={this.state.supplier_data[i].supplierId} key={i}>{this.state.supplier_data[i].supplierName}</option>
                    )
                }
        return (<div class="Parent_error_class">
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
                <h2>UPDATE PRODUCT</h2>
                <br/><br/>
                <label htmlFor="name"><b>Name: </b></label>
                <input type="text"  id="name" required defaultValue={this.state.product_data.pName} />
                <br/><br/>
                <label htmlFor="description"><b>Description: </b></label>
                <input type="text"  id="description" required  defaultValue={this.state.product_data.pDescription}/><br/><br/>
                <label htmlFor="date"><b>Manufacture Date: </b></label>
                <input type="date"  id="date" required defaultValue={this.state.product_data.pManufactureDate}/>
                <br/><br/>
                <label htmlFor="exp"><b>Expiry Date: </b></label>
                <input type="date"  id="exp" required defaultValue={this.state.product_data.pExpiryDate}/>
                <br/><br/>
                <label htmlFor="quantity"><b>Quantity: </b></label>
                <input type="number" id="quantity" required defaultValue={this.state.product_data.pQuantity}/>
                <br/><br/>
                <label htmlFor="sellingprice"> <b>Selling Price: </b></label>
                <input type="text"  id="sellingprice" required defaultValue={this.state.product_data.pSellingPrice}/>
                <br/><br/>
                <label htmlFor="costprice"><b>Cost Price: </b></label>
                <input type="text"  id="costprice" required defaultValue={this.state.product_data.pCostPrice} />
                <br/><br/>
                <label htmlFor="supplier"><b>Supplier Name: </b></label>
                <select  id="supplier" defaultValue={this.state.product_data.sId}>
                {options}
                </select>
                <br></br><br></br>
                <Link to={{pathname:`/addnewproduct`}}><button type="submit" onClick={() => this.updateProduct(this.props.match.params.product_id,document.getElementById('name').value,document.getElementById('description').value,document.getElementById('date').value,document.getElementById('exp').value,document.getElementById('quantity').value,document.getElementById('costprice').value,document.getElementById('sellingprice').value,document.getElementById('supplier').value )} >
                Update</button></Link>
                <Link to="/addnewproduct"><button type="cancel" >Cancel</button></Link>
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
export default Updateproduct;












