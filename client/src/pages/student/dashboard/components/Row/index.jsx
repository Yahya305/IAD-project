import React from 'react'
import '../Row/index.css'

const index = () => {
  return (
    <div className='each-row'>
      <div className="row-content">
        <div className="row-wrapper">
          <p className="fields tasks">Task # 1</p>
          <p className="fields submission-link"><a href="https://example.com/task-demo">https://example.com/task-demo</a></p>
          <p className="fields deadline">8/5/2024</p>
          <p className="fields status">Pending</p>
          <p className="fields score">30</p>
          <p className="fields expand">
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="22" viewBox="0 0 5 22" fill="none">
              <path d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z" fill="#B9B9B9" />
              <path d="M2.5 13.5C3.88071 13.5 5 12.3807 5 11C5 9.61929 3.88071 8.5 2.5 8.5C1.11929 8.5 0 9.61929 0 11C0 12.3807 1.11929 13.5 2.5 13.5Z" fill="#B9B9B9" />
              <path d="M2.5 21.5C3.88071 21.5 5 20.3807 5 19C5 17.6193 3.88071 16.5 2.5 16.5C1.11929 16.5 0 17.6193 0 19C0 20.3807 1.11929 21.5 2.5 21.5Z" fill="#B9B9B9" />
            </svg>
          </p>
        </div>
      </div>
    </div>
  )
}

export default index