import React from "react";

export default function Synonyms(props) {
  if (!props.synonyms || props.synonyms.length === 0) {
    return null;
  }

  return (
    <div>
      <em>Synonyms:</em>
      <ul className="synonyms">
        {props.synonyms.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>
    </div>
  );
}

          