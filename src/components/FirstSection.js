import React from "react";
import Balloon from "../images/balloon.png";

export default function FirstSection() {
  return (
    <section id="section1">
      <div class="container">
        <div class="content">
          <div class="text">
            <div class="title1">SPOTIFY PREMIUM</div>
            <div class="title2">Get 3 months of Premium for free</div>
            <div class="description">
              Enjoy ad-free music, offline listening, and more. Cancel anytime.
            </div>
            <button class="button">GET 3 MONTHS FREE</button>
            <div class="note">
              Individual plan only. Only $9.99/month after. Offer not available
              to users who already tried Premium. Terms and conditions apply.
              Offer ends Dec 31, 2020.
            </div>
          </div>
          <img src={Balloon} alt="ballon" />
        </div>
      </div>
    </section>
  );
}
