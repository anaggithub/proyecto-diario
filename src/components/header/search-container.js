import React, {useState} from "react";
import "../../styles/styles.scss";

const SearchContainer = () => {

    const [searchInputOpen, setSearchInputOpen] = useState(false);
    const searchInputDisplay = searchInputOpen ? "block"  : "none";

    let ref = React.useRef();
    // const searchInputClass = document.getElementsByClassName("searchinput")
    // const searchInput = searchInputClass[0];
    // console.log(searchInput)

    return (
        <form className="search-form" method="get">
            <input ref={ref} className="search-form--input searchinput" type="text" style={{ display: searchInputDisplay }}></input>
            <button
                type="submit"
                className="search-form--button button button-icon"
                onClick={(e) => {
                    e.preventDefault();
                    setSearchInputOpen(!searchInputOpen);
                }}
            >
                <i className="search-form--icon fas fa-search"></i>
            </button>
        </form>
    );
}

export default SearchContainer