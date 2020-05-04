import React, {useState} from "react";
import "../../styles/styles.scss";

const SearchContainer = () => {

    const [isSearchInputOpen, setSearchInputOpen] = useState(false);
    const searchInputDisplay = isSearchInputOpen ? "block"  : "none";

    let ref = React.useRef();
    return (
        <form className="search-form" method="get">
            <input ref={ref} className="search-form--input searchinput" type="text" style={{ display: searchInputDisplay }}></input>
            <button
                type="submit"
                className="search-form--button button button-icon"
                onClick={(e) => {
                    e.preventDefault();
                    setSearchInputOpen(!isSearchInputOpen);
                }}
            >
                <i className="search-form--icon fas fa-search"></i>
            </button>
        </form>
    );
}

export default SearchContainer