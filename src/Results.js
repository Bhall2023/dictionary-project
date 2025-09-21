import React from "react";

export default function Results(props) {
    if (!props.results || props.results.length === 0) {
    return (
        <div className="Results" >This is where the definition will appear.</div>
    );
    } else {
    return (
        <div className="Results">
            <h2>{props.results.word}</h2>
            {props.results.meanings.map(function(meaning, index) {
                return (
                    <div key={index}>
                        <h3>{meaning.partOfSpeech}</h3>
                        {meaning.definitions.map(function(definition, defIndex) {
                            return (
                                <div key={defIndex}>
                                    <p>{definition.definition}</p>
                                    {definition.example && <p><em>Example: {definition.example}</em></p>}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
    }
}