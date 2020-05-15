import React from "react";
// import "./index.css";

import Footer from "../common/Footer"; //refer to Footer.js
import Header from "../common/Header";
import styles from "./StockList.css";
import StockList from "./StockList";

import ShortageProducts from "./ShortageProducts";
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import NavStock from "./NavStock";
import Addproduct from "./Addproduct";
import UpdateProduct from "./UpdateProduct";
import Addnewproduct from "./Addnewproduct";
import Addsupplier from "./Addsupplier";
import Showsupplier from "./Showsupplier";
import Report from "./Report";

class StockMain extends React.Component {
  constructor(props) {
    super(props); 
    this.state={
      isAdd:false,
      isAddSupplier:false,
      isAllProducts:false,
      isAllSuppliers:false,
      isPlaceOrder:false,
      isPurchaseReport:false,
      isUpdateProduct:false
         }
      this.addStatus=this.updateStatus.bind(this);
}

updateStatus(value,id){
  if(value==="AddProduct"){
  this.setState({
    isAdd:true,
      isAddSupplier:false,
      isAllProducts:false,
      isAllSuppliers:false,
      isPlaceOrder:false,
      isPurchaseReport:false,
      isUpdateProduct:false
  });
  }
  else if(value==="AllProducts"){
    this.setState({
      isAdd:false,
      isAddSupplier:false,
      isAllProducts:true,
      isAllSuppliers:false,
      isPlaceOrder:false,
      isPurchaseReport:false,
      isUpdateProduct:false
    });
    }
    else if(value==="AllSuppliers"){
      this.setState({
        isAdd:false,
      isAddSupplier:false,
      isAllProducts:false,
      isAllSuppliers:true,
      isPlaceOrder:false,
      isPurchaseReport:false,
      isUpdateProduct:false
      });
      }
      else if(value==="AddSupplier"){
        this.setState({
          isAdd:false,
        isAddSupplier:true,
        isAllProducts:false,
        isAllSuppliers:false,
        isPlaceOrder:false,
        isPurchaseReport:false,
        isUpdateProduct:false
        });
        }
          else if(value==="PlaceOrder"){
            this.setState({
              isAdd:false,
            isAddSupplier:false,
            isAllProducts:false,
            isAllSuppliers:false,
            isPlaceOrder:true,
            isPurchaseReport:false,
            isUpdateProduct:false
            });
            }
            else if(value==="PurchaseReport"){
              this.setState({
                isAdd:false,
              isAddSupplier:false,
              isAllProducts:false,
              isAllSuppliers:false,
              isPlaceOrder:false,
              isPurchaseReport:true,
              isUpdateProduct:false
              });
              }
              else if(value==="UpdateProduct"){
                this.setState({
                  isAdd:false,
                isAddSupplier:false,
                isAllProducts:false,
                isAllSuppliers:false,
                isPlaceOrder:false,
                isPurchaseReport:false,
                isUpdateProduct:true
                });
                }
              else{
                this.setState({
                  isAdd:false,
                isAddSupplier:false,
                isAllProducts:false,
                isAllSuppliers:false,
                isPlaceOrder:false,
                isPurchaseReport:false,
                isUpdateProduct:false
                });
                }
}
  render() {
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    console.log('horray!!', loginData);
    return (
      <article>
        <NavStock add={this.updateStatus.bind(this)}/>
        Welcome {loginData.userName}!!
        <ShortageProducts/>
        }
      </article>
    );   
  }
}

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <StockMain />
        <Footer />
      </div>
    );
  }
}

export default Root;
