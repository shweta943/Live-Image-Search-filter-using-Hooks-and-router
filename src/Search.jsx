import React, { useState } from "react";
import SearchResult from "./SearchResult";


const Search = () =>{
    const [image, setImage]= useState("");

    const inputEvent =(e)=>{
        setImage(e.target.value);
        }

    return (
        <div className="search">
        <input type="text" 
        placeholder="Enter here.." 
        value={image} 
        onChange={inputEvent}>

        </input>
        {image === "" ? null : <SearchResult name={image} />}
        

        </div>
    );

}
export default Search;