import React from "react";
import TableSearch from "../../../../../../components/TableSearch/TableSearch";
import "./SubmissionTableTools.css";

const sectionOptions = ["A", "B"];

function SubmissionTableTools({ searchQuery, setSearchQuery, onSectionChange }) {
    return (
        <div className="table-tools">
            <TableSearch
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                placeholder="Search challenge submissions..."
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

export default SubmissionTableTools;
