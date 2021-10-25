import React from "react";
import Logo from "../images/logo.png";
import Facebook from "../images/fb.png";
import Instagram from "../images/ig.png";
import Twitter from "../images/twitter.png";
import USA from "../images/usa.jpg";

export default function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="footer1">
          <div class="footer1-left">
            <div>
              <img src={Logo} alt="logo" width="130" />
            </div>
            <div class="column company">
              <div class="heading">Company</div>
              <a href="google.com">About</a>
              <a href="google.com">Jobs</a>
              <a href="google.com">For the Record</a>
            </div>
            <div class="column communities">
              <div class="heading">Communities</div>
              <a href="google.com">For Artists</a>
              <a href="google.com">Developers</a>
              <a href="google.com">Brands</a>
              <a href="google.com">Investors</a>
              <a href="google.com">Vendors</a>
            </div>
            <div class="column useful-links">
              <div class="heading">Useful Links</div>
              <a href="google.com">Support</a>
              <a href="google.com">Web Player</a>
              <a href="google.com">Free Mobile App</a>
              <a href="google.com">2020 Wrapped</a>
            </div>
          </div>
          <div class="footer1-right">
            <a class="footer-icon" href="google.com">
              <img src={Instagram} alt="Instagram" width="50" />
            </a>
            <a class="footer-icon" href="google.com">
              <img src={Facebook} alt="Facebook" width="50" />
            </a>
            <a class="footer-icon" href="google.com">
              <img src={Twitter} alt="Twitter" width="50" />
            </a>
          </div>
        </div>
        <div class="footer2">
          USA <img src={USA} alt="USA" width="20" />
        </div>
        <div class="footer3">
          <div class="footer3-left">
            <a href="google.com">Legal</a>
            <a href="google.com">Privacy Center</a>
            <a href="google.com">Privacy Policy</a>
            <a href="google.com">Cookies</a>
            <a href="google.com">About Ads</a>
            <a href="google.com">Additional CA Privacy Disclosures</a>
          </div>
          <div class="footer3-right">© 2020 Spotify AB</div>
        </div>
      </div>
    </footer>
  );
}
