import React from "react";

import JobCard from "./JobCard";

import { jobs, companies } from "../data.json";

export default function Jobs() {
  const filteredJobs = jobs.slice(0, 20);

  return (
    <div id="job-board">
      {filteredJobs.map((item) => {
        [item.company] = companies.filter((x) => x.id === item.companyId);

        return <JobCard key="item.id" props={item} />;
      })}
    </div>
  );
}
