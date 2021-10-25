import React from "react";

export default function Benefits({ benefits }) {
  return (
    <div className="benefits-tag">
      {Object.entries(benefits).map(([benefit, value]) => {
        if (value) {
          return <li className="benefit-true">{benefit}</li>;
        } else {
          return <li className="benefit-false">{benefit}</li>;
        }
      })}
    </div>
  );
}
