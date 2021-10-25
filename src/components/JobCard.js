import React from "react";
import Company from "./Company";
import SkillTag from "./SkillTag";

export default function JobCard({ props }) {
  const {
    company,
    title,
    city,
    postedDate,
    salaryLow,
    salaryHigh,
    yrsXPExpected,
    active,
    remote,
    description: desc,
    skills,
  } = props;
  console.log(`skills`, skills);
  return (
    <div className="job-card">
      <div className="job-card_header">
        <div className="title">{title}</div>
        <span className="company-name">{company.name}</span>–
        <span className="city">{city}</span>
        <div className="apply-button">
          <button>Apply now</button>
        </div>
      </div>
      <div className="job-card_body">
        <div className="job-overview">
          <div className="job-posted-date">Posted on {postedDate}</div>
          <span className="salary-low">
            ${salaryLow.toLocaleString("en-US")}
          </span>
          –
          <span className="salary-high">
            ${salaryHigh.toLocaleString("en-US")}
          </span>
          <div className="years-xp-expected">
            Experience: {yrsXPExpected} years
          </div>
          <span className="active">
            {active ? "Active job" : "Expired job"}
          </span>
          -<span className="remote">{remote ? "Remote" : "Office"}</span>
          <div>
            <strong>Skills set:</strong>
          </div>
          <SkillTag skills={skills} />
          <div className="desc">
            <strong>Job description:</strong> {desc}
          </div>
        </div>
        <hr />
        <div className="company-overview">
          <Company company={company} />
        </div>
      </div>
    </div>
  );
}
