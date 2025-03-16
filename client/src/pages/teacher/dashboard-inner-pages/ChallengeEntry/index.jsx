import React, { useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import apiClient from "../../../../config/apiClient"
import "./index.css"
import toast from '../../../../components/CustomToast/toast'

const ChallengeEntry = () => {
    const [state, setState] = useState({
        comp: "null",
        section: "null",
        teamA: "null",
        teamB: "null",
        project_name: "",
        project_deadline: "",
        project_description: "",
    })
    const changeValue = (name, value) => {
        setState(p => ({ ...p, [name]: value }))
    }

    const { data: AllCompitions } = useQuery({
        queryKey: "competitions",
        select: data => data.data,
        queryFn: async () => {
            return await apiClient.get("/competition")
        }
    })

    const { data: AllTeams } = useQuery({
        queryKey: "all-teams",
        select: data => data.data,
        queryFn: async () => {
            return await apiClient.get("/team")
        }
    })

    const section = AllCompitions?.filter(x => x?.competitionId === state.comp)?.[0]?.section

    const SubmitForm = async () => {
        try {
            await apiClient.post("/challenge/create-challenge", {
                name: state.project_name,
                description: state.project_description,
                competitionId: state.comp,
                teamA: state.teamA,
                teamB: state.teamB,
                // deadline: state.project_deadline
                deadline: new Date(state.project_deadline).toISOString()
            })
            toast.success({ title: "Challenge Creation", description: "Done" })
            setState({
                comp: "null",
                section: "null",
                teamA: "null",
                teamB: "null",
                project_name: "",
                project_deadline: "",
                project_description: "",
            })
        } catch (error) {
            toast.error({ title: "Challenge Creation", description: "Failed" })
        }
    }

    return (
        <div className='ChallengeEntry'>
            <div className="ChallengeEntry-wrapper">
                <div className="head">
                    <div className="title">
                        Assign Challenge
                    </div>
                </div>
                <div className="body">
                    <div className="input">
                        <div className="title">Choose Competition</div>
                        <select onChange={e => changeValue("comp", e.target.value)}>
                            <option value="null" >Select Compition</option>
                            {AllCompitions?.map(x => <option key={x.competitionId} value={x.competitionId}>{x.competitionName}</option>)}
                        </select>
                    </div>
                    {
                        state.comp != "null" &&
                        <div className="input" >
                            <div className="title">Choose Section</div>
                            <input type="text"
                                value={section}
                            />
                        </div>
                    }
                    {
                        state.comp != "null" &&
                        <div className="input" >
                            <div className="title">Choose Team A</div>
                            <select onChange={e => changeValue("teamA", e.target.value)}>
                                <option value="null">Select Team A</option>
                                {
                                    AllTeams?.
                                        filter(x => x.section === section).
                                        map(
                                            x =>
                                                <option key={x.teamId} value={x.teamId}>
                                                    {x.teamNumber} {x.section}
                                                </option>
                                        )
                                }
                            </select>
                        </div>
                    }
                    {
                        state.teamA != "null" &&
                        <div className="input" >
                            <div className="title">Choose Team B</div>
                            <select onChange={e => changeValue("teamB", e.target.value)}>
                                <option value="null">Select Team B</option>
                                {
                                    AllTeams?.
                                        filter(x => x.section === section).
                                        filter(x => x.teamId !== state.teamA).
                                        map(
                                            x =>
                                                <option key={x.teamId} value={x.teamId}>
                                                    {x.teamNumber} {x.section}
                                                </option>
                                        )
                                }
                            </select>
                        </div>
                    }
                </div>
                <div className="foot">
                    <div className="project-title">Project Info</div>
                    <div className="project-info">
                        <div className="input size-1">
                            <div className="title">Name</div>
                            <input type="text" onChange={e => changeValue("project_name", e.target.value)} />
                        </div>
                        <div className="input size-1">
                            <div className="title">Deadline</div>
                            <input type="date" onChange={e => changeValue("project_deadline", e.target.value)} />
                        </div>
                        <div className="input size-2">
                            <div className="title">Description</div>
                            <input type="text" onChange={e => changeValue("project_description", e.target.value)} />
                        </div>
                    </div>
                    <button onClick={SubmitForm} className='submit'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ChallengeEntry