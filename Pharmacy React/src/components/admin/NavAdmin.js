import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class NavAdmin extends React.Component {
    constructor(props) {
        super(props);   
  }
 
    render() {
        console.log(this.props.add);
      return (
<nav>
            <div class="menu-container">
              <ul class="menu">
                <li class="menu-apple">
                  <Link to="/adminmain"><a href="#">
                    <i class="fa fa-home apple-icon" aria-hidden="true"></i>
                  </a></Link>
                </li>
                <li class="menu-mac">
						<Link to="/addnewproduct"><a href="#" >
							<span >Products</span>
						</a></Link>
                </li>
                <li class="menu-iPad">
                <Link to="/allsuppliers"><a href="#">
                    <span>Suppliers</span>
                  </a></Link>
                </li>
                
                <Link to="/adminreport"><li class="menu-iPhone">
                  <a href="#">
                    <span>Reports</span>
                  </a>
                </li>
                </Link>
                <li class="menu-iPhone">
                <Link to="/"><a href="#">
                    <span>Logout</span>
                  </a>
                  </Link>
                </li>
        
                <li class="menu-search"><Link to="/profile">
                  <a href="#">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </a>
                  </Link>
                </li>
              </ul>
            </div>

          </nav>
              );
            }
          }
          export default NavAdmin;