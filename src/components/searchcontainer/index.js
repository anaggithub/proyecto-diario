import React, { useState } from "react";
import "../../styles/styles.scss";
import "./index.scss";

const SearchContainer = () => {

    const [isSearchInputOpen, setSearchInputOpen] = useState(false);
    let ref = React.useRef();
    return (
        <form className="search-container" method="get">
            <input
                ref={ref}
                className="search-container--input searchinput"
                type="text"
                style={{ display: isSearchInputOpen ? "block" : "none" }} />
            <button
                type="submit"
                className="search-container--button button button-icon"
                onClick={(e) => {
                    e.preventDefault();
                    setSearchInputOpen(!isSearchInputOpen);
                }} >
                <i className="search-container--icon fas fa-search"></i>
            </button>
        </form>
    );
}

export default SearchContainer