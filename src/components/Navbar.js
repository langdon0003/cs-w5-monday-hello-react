import React from "react";
import Logo from "../images/logo.png";

function Navbar() {
  return (
    <nav>
      <div class="container">
        <img src={Logo} alt="logo" width="130" />
        <div class="links">
          <a href="/jobs">Jobs</a>
          <a href="google.com">Support</a>
          <a href="google.com">Download</a>
          <span>|</span>
          <a href="google.com">Sign up</a>
          <a href="google.com">Log in</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
