import React from "react";
import Synonyms from "./Synonyms";

export default function Results({ results }) {
  
  const entry = Array.isArray(results) ? results[0] : results;

  if (!entry) return null;

  return (
    <div className="Results">
      <h2>{entry.word}</h2>

      {entry.phonetics?.map((phonetic, index) =>
        phonetic.text ? (
          <p key={index}>
            <em>{phonetic.text}</em>
            {phonetic.audio && (
              <a href={phonetic.audio} target="_blank" rel="noreferrer"> 🔊 </a>
            )}
          </p>
        ) : null    
      )}

      {entry.meanings?.map((meaning, mIdx) => (
        <div key={mIdx}>
          <h3>{meaning.partOfSpeech}</h3>

          {meaning.definitions?.map((definition, dIdx) => (
            <div key={dIdx}>
              <p>{definition.definition}</p>
              {definition.example && (
                <p>
                  <strong>Example: </strong>
                  {definition.example}
                </p>
              )}

              {/* definition-level synonyms */}
              <Synonyms synonyms={definition.synonyms} />
            </div>
          ))}

          {/* meaning-level synonyms once per meaning */}
          <Synonyms synonyms={meaning.synonyms} />
        </div>
      ))}
    </div>
  );
}
