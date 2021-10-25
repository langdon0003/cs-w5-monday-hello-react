import React from "react";

export default function SkillTag({ skills }) {
  return (
    <div className="skill">
      {skills.map((x) => {
        return <span className="skill-tag">{x} </span>;
      })}
    </div>
  );
}
