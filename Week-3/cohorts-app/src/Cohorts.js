import React from "react";
import CohortDetails from "./CohortDetails";

const Cohorts = () =>{
    const cohortsData = [
    {
      id: 1,
      code: "INTADMDF10",
      track: ".NET FSD",
      startDate: "22-Feb-2022",
      status: "Scheduled",
      coach: "Aathma",
      trainer: "Jojo Jose"
    },
    {
      id: 2,
      code: "ADM21JF014",
      track: "Java FSD",
      startDate: "10-Sep-2021",
      status: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith"
    },
    {
      id: 3,
      code: "CDBJF21025",
      track: "Java FSD",
      startDate: "24-Dec-2021",
      status: "Ongoing",
      coach: "Aathma",
      trainer: "John Doe"
    }
  ];

  return(
    <div>
        <h2>Cohorts Details</h2>
        <div>
            {cohortsData.map(cohort =>(
                <CohortDetails key={cohort.id} cohort={cohort} />
            ))}
        </div>
    </div>
  );
};

export default Cohorts;