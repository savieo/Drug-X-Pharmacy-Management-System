import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class NavStock extends React.Component {
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
                  <a href="#">
                    <Link to="/stockmain"><i class="fa fa-home apple-icon" aria-hidden="true"></i></Link>
                  </a>
                </li>
                <li class="menu-iPad">
                <Link to="/addnewproduct"><a href="#">
                    <span>Products</span>
                  </a></Link>
                  </li>
                <li class="menu-iPad">
                <Link to="/allsuppliers"><a href="#">
                    <span>Suppliers</span>
                  </a>
                  </Link>
                </li>
                
                <li class="menu-iPhone">
                <Link to="/stocklist"><a href="#">
                    <span>Place Order</span>
                  </a></Link>
                </li>
                
                <li class="menu-watch">
                <Link to="/report"><a href="#">
                    <span>Purchase Report</span>
                  </a>
                  </Link>
                </li>
                <li class="menu-iPhone">
                <Link to="/"><a href="#">
                    <span>Logout</span>
                  </a>
                  </Link>
                </li>

                <li class="menu-search">
                <Link to="/profile"><a href="#">
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
          export default NavStock;