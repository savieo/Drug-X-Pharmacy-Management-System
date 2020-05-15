import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Helmet } from "react-helmet";


class Header extends React.Component {
  render() {
    return (
      <div>

        <div className="applicatio">
          <head>
            <Helmet>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
              <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' />
              <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' />
              {/* <link rel="stylesheet" href="./home.css/"> */}

            </Helmet>
          </head>
        </div>


        <body>        
          <header>
          <div class="header">
            <h1>Pharmacy Management System</h1>
          </div>

          
        </header>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
        </body>

      </div>


    );
  }
}
export default Header;