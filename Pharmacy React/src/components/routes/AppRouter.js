import React from "react";
import ReactDOM from "react-dom";
import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect
  } from 'react-router-dom'
import StockMain from '../stock/StockMain';
import AdminMain from '../admin/AdminMain';
import PharmacistMain from '../pharmacist/PharmacistMain';
import LoginPage from "../../LoginPage";
import Addproduct from "../stock/Addproduct";
import Addsupplier from "../stock/Addsupplier";
import UpdateProduct from "../stock/UpdateProduct";
import Updatesupplier from "../stock/Updatesupplier";
import Addnewproduct from "../stock/Addnewproduct";
import AllSuppliers from "../stock/Showsupplier";
import StockList from "../stock/StockList";
import Report from "../stock/Report";
import AdminReport from "../admin/Report";
import SalesReport from "../pharmacist/Report";
import Profile from "../common/Profile";
import ChangePassword from "../common/ChangePassword";
import Availableproduct from "../pharmacist/Availableproduct";
import Addpharmacist from "../admin/Addpharmacist";
import Showstaff from "../admin/Showstaff";
import PharmacistProfile from "../admin/PharmacistProfile";
import Pharmisict from "../pharmacist/Pharmisict";
  // …
  class AppRouter extends React.Component {
    constructor() {
      super();
      this.setLoginData.bind(this);
      this.loginData = {};
    }

    setLoginData(loginData) {
      console.log("Login data", loginData);
      this.loginData = loginData;
    }


    render() {
      return (
        <Router>  
          <div>
              <Switch>
                <Route exact path="/" render={ () => (
                  <LoginPage onLogin={this.setLoginData}/>)
                } />
                <Route exact path="/stockmain" render={ () => (
                  <StockMain loginData={this.loginData}/>)
                } />
                <Route exact path="/adminmain" render={ () => (
                  <AdminMain loginData={this.loginData}/>)
                } />
                <Route exact path="/pharmacistmain" render={ () => (
                  <PharmacistMain loginData={this.loginData}/>)
                } />
                <Route path="/addproduct" render={ () => (
                  <Addproduct loginData={this.loginData}/>)
                } />
                <Route path="/addsupplier" render={ () => (
                  <Addsupplier loginData={this.loginData}/>)
                } />
                <Route path="/addnewproduct" render={ () => (
                  <Addnewproduct loginData={this.loginData}/>)
                } />
                <Route path="/allsuppliers" render={ () => (
                  <AllSuppliers loginData={this.loginData}/>)
                } />
                <Route exact path="/stocklist" render={ () => (
                  <StockList loginData={this.loginData}/>)
                } />
                <Route exact path="/report" render={ () => (
                  <Report loginData={this.loginData}/>)
                } />
                <Route exact path="/adminreport" render={ () => (
                  <AdminReport loginData={this.loginData}/>)
                } />
                <Route exact path="/salesreport" render={ () => (
                  <SalesReport loginData={this.loginData}/>)
                } />
                <Route exact path="/profile" render={ () => (
                  <Profile loginData={this.loginData}/>)
                } />
                <Route exact path="/availableproducts" render={ () => (
                  <Availableproduct loginData={this.loginData}/>)
                } />
                <Route exact path="/adduser" render={ () => (
                  <Addpharmacist loginData={this.loginData}/>)
                } />
                <Route exact path="/showstaff" render={ () => (
                  <Showstaff loginData={this.loginData}/>)
                } />
                <Route exact path="/salesorder" render={ () => (
                  <Pharmisict loginData={this.loginData}/>)
                } />
                
                <Route path="/PharmacistProfile/:uid" component={PharmacistProfile} loginData={this.loginData} />
                <Route path="/UpdateProduct/:product_id" component={UpdateProduct} loginData={this.loginData} />
                <Route path="/changepassword" component={ChangePassword}  loginData={this.loginData}/>
                <Route path="/Updatesupplier/:sid" component={Updatesupplier} loginData={this.loginData}/>
                <Route>
                  <Redirect
                      to={{
                          pathname: "/"
                      }}
                  />
                </Route>
              </Switch>
            </div>
        </Router>
      );
    }
  }  
export default AppRouter;