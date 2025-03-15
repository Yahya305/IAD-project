import React from "react";
import TableSearch from "../../../../../../components/TableSearch/TableSearch";
import "./TableTools.css";

const sectionOptions = ["A", "B"];

function TableTools({ searchQuery, setSearchQuery, onSectionChange }) {
    return (
        <div className="table-tools">
            <TableSearch
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                placeholder="Search leaderboard..."
            />
            <select
                className="section-select"
                onChange={onSectionChange}
                defaultValue="A"
            >
                {sectionOptions.map((section) => (
                    <option key={section} value={section}>
                        Section {section}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default TableTools;
