import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "Black",
  };

  return (
    <nav>
      <h3>DBS User Page</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/UserInformation">
          <li>User Information</li>
        </Link>
        <Link style={navStyle} to="/CurrentAssetPricing">
          <li>Current Asset Pricing</li>
        </Link>
        <Link style={navStyle} to="/TransactionHistory">
          <li>Transaction History</li>
        </Link>
        <Link style={navStyle} to="/BuySellAsset">
          <li>Buy/Sell Asset</li>
        </Link>
        <Link style={navStyle} to="/">
          <li>View Asset</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
