import React from 'react'
import "./index.css"

const ChallengeEntry = () => {
    return (
        <div className='ChallengeEntry'>
            <div className="ChallengeEntry-wrapper">
                <div className="head">
                    <div className="title">
                        Week 001 Challenge Entry
                    </div>
                </div>
                <div className="body">
                    <div className="input">
                        <div className="title">Choose Competition</div>
                        <select defaultValue="comp_1">
                            <option value="comp_1">Compt 1</option>
                            <option value="comp_2">Compt 2</option>
                        </select>
                    </div>
                    <div className="input">
                        <div className="title">Choose Section</div>
                        <select defaultValue="team_1">
                            <option value="team_1">Section 1</option>
                            <option value="team_2">Section 2</option>
                        </select>
                    </div>
                    <div className="input">
                        <div className="title">Choose Team A</div>
                        <select defaultValue="team_1">
                            <option value="team_1">Team 1</option>
                            <option value="team_2">Team 2</option>
                        </select>
                    </div>
                    <div className="input">
                        <div className="title">Choose Team B</div>
                        <select defaultValue="team_1">
                            <option value="team_1">Team 1</option>
                            <option value="team_2">Team 2</option>
                        </select>
                    </div>
                </div>
                <div className="foot">
                    <div className="project-title">Project Info</div>
                    <div className="project-info">
                        <div className="input size-1">
                            <div className="title">Name</div>
                            <input type="text" />
                        </div>
                        <div className="input size-1">
                            <div className="title">Deadline</div>
                            <input type="text" />
                        </div>
                        <div className="input size-2">
                            <div className="title">Description</div>
                            <input type="text" />
                        </div>
                    </div>
                    <button className='submit'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ChallengeEntry