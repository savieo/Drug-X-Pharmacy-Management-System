import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../stock/StockList.css";
import { Helmet } from "react-helmet";
import Footer from "../common/Footer"; //refer to Footer.js
import Header from "../common/Header";
import NavPharmacist from "./NavPharmacist";
import {Link } from "react-router-dom";

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
        this.handleChange = this.handleChange.bind(this);
    }
    generateReport=(from,to)=>{
        
        fetch('http://localhost:8762/sales-managment-service/order/report?from='+from+'&to='+to,{
    method: "GET"
}).then(
    response => {
        if (response.ok) {     
            response.json().then(json_response => {
                console.log(json_response);
                this.setState({
                    report_data: json_response,
                    report_count: json_response.length, 
                    report_index: 0, 
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
                    report_data: {}, 
                    report_count: 0,
                    report_index: 0
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
            report_data: {}, 
            report_count: 0,
            report_index: 0
        });
    }
);
}

    handleChange(date) {
        this.setState({
            date: date
        });
        }

        openDatePicker = () => {};
  //   onChange = date => this.setState({ date })
    
componentDidUpdate(){
    
}

    render() {
        return (
<div className="Parent_error_class">
    <Header/>
    <NavPharmacist/>
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
                    <br></br><br></br>
                <h2>REPORT</h2>
                <br></br><br></br><br></br>
                <form className="form-group" style={{ margin: "auto", maxWidth: "520px" }}>
               <label htmlFor="from"><b>From: </b></label >
                 <DatePicker  id="from" dateFormat="yyyy-MM-dd" selected={this.state.date} onChange={this.handleChange}/>&nbsp;
                 &nbsp;&nbsp;&nbsp;<label htmlFor="to"><b>To: </b></label>
                 <DatePicker  id="to" dateFormat="yyyy-MM-dd" selected={this.state.date} onChange={this.handleChange}/>
                <br/><br/>
                <button className="report_button" type="submit" onClick={()=>this.generateReport(document.getElementById('from').value,document.getElementById('to').value)}>Generate Report</button>
                <Link to="/pharmacistmain"><button type="cancel" >Cancel</button></Link>
                </form>
                    <div class="limiter">
                <br></br><br></br><br></br><br></br>
            <div class="container-table100">
                        <div class="wrap-table100">
                    <div class="table100 ver2 m-b-110"> 
                   
                <br></br><br></br><br></br>
                </div>
                </div>
                </div>
                </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Report;


/*
this.state = {
    startDate: new Date()
};
this.handleChange = this.handleChange.bind(this);
}

handleChange(date) {
this.setState({
startDate: date
});
}

openDatePicker = () => {};

render() {
return (
<div>
<DatePicker
  selected={this.state.startDate}
  onChange={this.handleChange}
/>
<button onClick={this.openDatePicker}>openDate</button>
</div>

);
}
}
*/







