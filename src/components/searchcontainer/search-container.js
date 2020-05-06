import React, {useState} from "react";
import "../../styles/styles.scss";
import "./search-container.scss";

const SearchContainer = () => {

    const [isSearchInputOpen, setSearchInputOpen] = useState(false);
    const searchInputDisplay = isSearchInputOpen ? "block"  : "none";

    let ref = React.useRef();
    return (
        <form className="search-container" method="get">
            <input ref={ref} className="search-container--input searchinput" type="text" style={{ display: searchInputDisplay }}></input>
            <button
                type="submit"
                className="search-container--button button button-icon"
                onClick={(e) => {
                    e.preventDefault();
                    setSearchInputOpen(!isSearchInputOpen);
                }}
            >
                <i className="search-container--icon fas fa-search"></i>
            </button>
        </form>
    );
}

export default SearchContainer