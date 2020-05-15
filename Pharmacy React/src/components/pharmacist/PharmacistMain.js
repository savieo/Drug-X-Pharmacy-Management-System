import React from "react";
// import "./index.css";

import Footer from "../common/Footer"; //refer to Footer.js
import Header from "../common/Header";
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import NavAdmin from "./NavPharmacist";
import StockList from "../stock/StockList";
import Report from "./Report";
import Availableproduct from "./Availableproduct";
class PharmacistMain extends React.Component {
  constructor(props) {
    super(props); 
    this.state={
      isSalesReport:false,
      isPlaceOrder:false
         }
      this.addStatus=this.updateStatus.bind(this);
}
updateStatus(value){
    if(value==="PlaceOrder"){
      this.setState({
        isSalesReport:false,
        isPlaceOrder:true
           });
      }
      else if(value==="SalesReport"){
        this.setState({
          isSalesReport:true,
          isPlaceOrder:false
             });
        }
        else{
          this.setState({
            isSalesReport:false,
            isPlaceOrder:false
               });
          }
}
  render() {
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    console.log('horray!!', loginData);
    console.log('stockmain',this.state.isAdd)
    return (
      <article>
        <NavAdmin add={this.updateStatus.bind(this)}/>
        Welcome {loginData.userName}!!
        {
        <Availableproduct/>
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
        <PharmacistMain />
        <Footer />
      </div>
    );
  }
}

export default Root;
