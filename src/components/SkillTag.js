import React from "react";

export default function SkillTag({ skills }) {
  return (
    <div className="skill">
      {skills.map((x, i) => {
        return (
          <span key="i" className="skill-tag">
            {x}
          </span>
        );
      })}
    </div>
  );
}
