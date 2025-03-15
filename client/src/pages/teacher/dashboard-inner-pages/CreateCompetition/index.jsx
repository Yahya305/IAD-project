import React, { useState } from 'react'
import apiClient from '../../../../config/apiClient'
import "./index.css"

const CreateCompetition = () => {
    const [state, setState] = useState({
        comp_name: "",
        section: "",
        end_date: "",
    })
    const changeValue = (name, value) => {
        setState(p => ({ ...p, [name]: value }))
    }
    const Submit = async () => {
        await apiClient.post("/competition/create-competition", {
            section: state.section,
            comp_name: state.comp_name,
            end_date: new Date(state.end_date).toISOString()
        })
    }
    return (
        <div className='CreateCompetition'>
            <div className="CreateCompetition-wrapper">
                <div className="head">
                    <div className="title">
                        Create Competition
                    </div>
                </div>
                <div className="body">
                    <div className="input" >
                        <div className="title">Competition Name</div>
                        <input type="text" value={state.comp_name} onChange={(e) => changeValue("comp_name", e.target.value)} />
                    </div>
                    <div className="input" >
                        <div className="title">Choose Section</div>
                        <input type="text" value={state.section} onChange={(e) => changeValue("section", e.target.value)} />
                    </div>
                    <div className="input" >
                        <div className="title">Choose Section</div>
                        <input type="date" value={state.end_date} onChange={(e) => changeValue("end_date", e.target.value)} />
                    </div>
                </div>
                <button className='submit' onClick={Submit}>Submit</button>
            </div>
        </div>
    )
}

export default CreateCompetition