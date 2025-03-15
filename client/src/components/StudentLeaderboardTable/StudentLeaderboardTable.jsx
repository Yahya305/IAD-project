import React from "react";
import "./StudentLeaderboardTable.css";

function StudentLeaderboardTable({
    data,
    handlePrevPage,
    handleNextPage,
    offset,
    size = 20,
}) {
    return (
        <div>
            <div className="table-container">
                <table cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th>Student's Name</th>
                            <th>Seat No</th>
                            <th>Section</th>
                            <th>Group</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length === 0 && (
                            <tr>
                                <td colSpan="5" style={{ textAlign: "center" }}>
                                    No data found
                                </td>
                            </tr>
                        )}
                        {data?.map((student) => (
                            <tr key={student?.studentId}>
                                <td>{student?.name}</td>
                                <td>{student?.seatNo}</td>
                                <td>{student?.section}</td>
                                <td>{student?.teamId}</td>
                                <td>{student?.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={offset === 0}>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={data?.length < size}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default StudentLeaderboardTable;
