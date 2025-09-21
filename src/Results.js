import React from "react";
import Synonyms from "./Synonyms";

export default function Results({ results }) {
  if (!results || (Array.isArray(results) && results.length === 0)) {
    return <div className="Results">This is where the definition will appear.</div>;
  }

  return (
    <div className="Results">
      <h2>{results.word}</h2>

      {results.meanings.map((meaning, mIdx) => (
        <div key={mIdx}>
          <h3>{meaning.partOfSpeech}</h3>

          {meaning.definitions.map((definition, dIdx) => (
            <div key={dIdx}>
              <p>{definition.definition}</p>
              {definition.example && (
                <p>
                  <strong>Example: </strong>
                  {definition.example}
                </p>
              )}

              {/* Only show definition-level synonyms here */}
              <Synonyms synonyms={definition.synonyms} />
            </div>
          ))}

          {/* Show meaning-level synonyms once per meaning */}
          <Synonyms synonyms={meaning.synonyms} />
        </div>
      ))}
    </div>
  );
}
