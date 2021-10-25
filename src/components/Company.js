import React from "react";
import Benefits from "./Benefits";

export default function Company({ company }) {
  const { name, benefits, description: desc, numOfJobs } = company;
  return (
    <div>
      <div className="name">{name}</div>

      <div className="number-of-job">
        <a href="/"> {numOfJobs} jobs available</a>
      </div>
      <strong>Description:</strong>
      <div className="description">{desc}</div>
      <strong>Benefits:</strong>
      <Benefits benefits={benefits} />
    </div>
  );
}
