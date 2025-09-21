import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null); 
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
        setLoaded(true);
    }
    
    function search() {
     const q = (keyword || "").trim();           // <-- safe guard
     if (!q) { setLoaded(true); return; }    
     //documentation: https://dictionaryapi.dev/
     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
     axios.get(apiUrl).then(handleResponse);
    }  

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
    setKeyword(event.target.value);
    }

    if (!loaded) {
        search();
        return "Loading...";
    } else {

    return (
      <section className="Dictionary">
        <form onSubmit={handleSubmit}>
            <input type="search" value={keyword} onChange={handleKeywordChange} placeholder="Type a word…"/>
        </form>
        
        {results && <Results results={results} />}
      </section>
    );
}   
}
