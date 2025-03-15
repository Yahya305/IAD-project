import React from "react";
import { IoSearch } from "react-icons/io5";
import "./TableSearch.css";

const TableSearch = ({ searchQuery, setSearchQuery, placeholder }) => {
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="search-bar">
            <div className="search">
                <IoSearch size={20} />
                <input
                    type="text"
                    id="search-field"
                    className="searh"
                    placeholder={placeholder}
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
};

export default TableSearch;
