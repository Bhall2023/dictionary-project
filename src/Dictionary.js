import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null); 
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);   

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
        setLoaded(true);
    }
    function handleSheCodesResponse(response) {
        setPhotos(response.data.photos);    
    }
    
    function search() {
     const q = (keyword || "").trim();           // <-- safe guard
     if (!q) { setLoaded(true); return; }    
     //documentation: https://dictionaryapi.dev/
     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
     axios.get(apiUrl).then(handleDictionaryResponse);

    let sheCodesApiKey = "7689111d9btfeef8e4e3cc0cba8be0o7";
    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;
    axios.get(sheCodesApiUrl).then(handleSheCodesResponse).catch(() => setPhotos([]));
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
        {photos && photos.length > 0 && <Photos photos={photos} />}
      </section>
    );
}   
}
