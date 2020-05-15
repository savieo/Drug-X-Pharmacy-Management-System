import React from "react";
//import pharmacist from './public/pharmacist.jpg';
import styles from "./AddRole.css";

class AddRole extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          _data: [], 
          roles_index: 0, 
          roles_count: 0, 
          isLoaded: false,
          error: null    
    }
  }

//--------------------------------------Add Role-------------------------------------------------------------------------------
addRole = (roleName) => {

    // , sId:parseInt(sid) 
    fetch('http://localhost:8762/user-managment-service/roles/add_role', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roleName:roleName}),
          })
          .then(
            (response)=> {
                if (response.ok)
                {
                    response.json().then(json_response => {
                        console.log(json_response)
                        this.setState({
                            roles_data:json_response,
                            roles_count:json_response.length,
                            roles_index:0,
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
                             roles_data: {},
                             roles_count:0,
                             roles_index:0,
                         });
                     })
                 }
             },
             (error) => {
                 this.setState({
                     isLoaded: false,
                     error: {message:"AJAX error, URL wrong or unreachable, see console"}, // save the AJAX error in state for display below
                     roles_data: {},
                     roles_count:0,
                     roles_index:0,
                 });
             })
        
        };
        
      
    

    render() {
     
        return (

<div className="panel350">
            <form >
                <b>ADD Role</b>
                <br></br>
                <br></br>
             
           <label for="Rolename"><b> Role Name: </b></label>
             <input type="Rolename" id="roleName" required  style={{minWidth:"200px",minHeight:"25px",marginLeft:"20%",borderRadius:"3px"}} />
               <br/><br/>
               
                <button type="submit" style={{borderRadius:"3px",height:"30px",width:"22%"}} onClick={() => this.addRole(document.getElementById("roleName").value)}>Add</button>
                <button type="cancel" style={{borderRadius:"3px",height:"30px",width:"22%"}}>Cancel</button>
            </form>
            </div>
        );
    }
}
export default AddRole;












