import React from "react";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Results({ results }) {
  
  const entry = Array.isArray(results) ? results[0] : results;

  if (!entry) return null;

  return (
    <div className="Results">
      <h2>{entry.word}</h2>

      {entry.phonetics?.map((phonetic, index) =>
        phonetic.text ? (
          <p key={index}>
            {phonetic.text}
            {phonetic.audio && (
              <a href={phonetic.audio} target="_blank" rel="noreferrer"> 🔊 </a>
            )}
          </p>
        ) : null    
      )}

      {entry.meanings?.map((meaning, mIdx) => (
        <section key={mIdx}>
            
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
              {definition.synonyms && definition.synonyms.length > 0 && (
                <Synonyms synonyms={definition.synonyms} />
              )}
            </div>
          ))}

          {/* Render meaning-level synonyms only if there are no definition-level synonyms */}
          {(!meaning.definitions || meaning.definitions.every(def => !def.synonyms || def.synonyms.length === 0)) && (
            /* meaning-level synonyms once per meaning */
            <Synonyms synonyms={meaning.synonyms} />
          )}
        </section>
      ))}
    </div>
  );
}
