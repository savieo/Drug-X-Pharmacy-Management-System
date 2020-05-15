import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class NavPharmacist extends React.Component {
    constructor(props) {
        super(props);   
  }
    
    render() {
      return (
<nav>
            <div class="menu-container">

              <ul class="menu">
                <li class="menu-apple">
                <Link to="/pharmacistmain"><a href="#">
                    <i class="fa fa-home apple-icon" aria-hidden="true"></i>
                  </a>
                  </Link>
                </li>
                <li class="menu-mac">
						<Link to="/pharmacistmain"><a href="#" >
							<span >Products</span>
						</a>
            </Link>
                </li>
                 <li class="menu-iPad">
                 <Link to="/salesorder"><a href="#">
                    <span>Place Order</span>
                  </a></Link>
                </li>
                <li class="menu-iPhone">
                <Link to="/salesreport"><a href="#">
                    <span>Sales Report</span>
                  </a></Link>
                </li>
                <li class="menu-iPhone">
                <Link to="/"><a href="#">
                    <span>Logout</span>
                  </a>
                  </Link>
                </li>
                <li class="menu-search">
                <Link to="/profile"> <a href="#">
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
export default NavPharmacist;