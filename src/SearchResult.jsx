import React from "react";

const SearchResult=(props)=>{
    const img = `https://source.unsplash.com/500x600/?${props.name}`;

    return(
        <div>
            <img src={img} alt="shweta"/>
        </div>
    );
}

export default SearchResult;