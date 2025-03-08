import React from 'react'
import '../Table/index.css'
import Row from '../Row/index.jsx'

function Table() {
  return (
    <div className='table-section'>
      <div className="table-wrapper">
        <div className="search-bar">
          <div className="search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
              <path d="M19.2739 17.1636L15.1488 13.0386C16.0011 11.754 16.5 10.2159 16.5 8.5625C16.5 4.08238 12.8551 0.4375 8.375 0.4375C3.89488 0.4375 0.25 4.08238 0.25 8.5625C0.25 13.0426 3.89488 16.6875 8.375 16.6875C10.0284 16.6875 11.5665 16.1886 12.8511 15.3363L16.9761 19.4614C17.6099 20.0959 18.6401 20.0959 19.2739 19.4614C19.9084 18.8268 19.9084 17.7982 19.2739 17.1636ZM2.6875 8.5625C2.6875 5.42625 5.23875 2.875 8.375 2.875C11.5113 2.875 14.0625 5.42625 14.0625 8.5625C14.0625 11.6988 11.5113 14.25 8.375 14.25C5.23875 14.25 2.6875 11.6988 2.6875 8.5625Z" fill="#989898" /></svg>
            <input type="text" id="search-field" className="searh" placeholder="search here" />
          </div>
          <div className="upload-container">
            <div className="filter-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                <rect width="20" height="4" rx="2" fill="#151515" />
                <rect x="2" y="6" width="16" height="4" rx="2" fill="#151515" />
                <rect x="4" y="12" width="12" height="4" rx="2" fill="#151515" />
              </svg>
            </div>
            <button className="upload-button">+Upload Task</button>
          </div>
        </div>
        <div className="table-content">
          <div className="table-fields">
            <div className="field-wrapper">
              <p className="fields tasks">Tasks</p>
              <p className="fields submission-link">Submission Link</p>
              <p className="fields deadline">Deadline</p>
              <p className="fields status">Status</p>
              <p className="fields score">Score</p>
              <p className="fields expand"></p>
            </div>
          </div>
          <div className="tables-rows">
            <Row />
            <Row />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
