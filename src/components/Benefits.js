import React from "react";

export default function Benefits({ benefits }) {
  return (
    <div className="benefits-tag">
      {Object.entries(benefits).map(([benefit, value], x) => {
        if (value) {
          return (
            <li key="x" className="benefit-true">
              {benefit}
            </li>
          );
        } else {
          return (
            <li key="x" className="benefit-false">
              {benefit}
            </li>
          );
        }
      })}
    </div>
  );
}
