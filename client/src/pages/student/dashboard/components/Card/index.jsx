import React from 'react'
import './index.css'

function Card() {
  return (
    <div className='student-dashboard-card'>
      <div className="container">
        <div className="card-wrapper">
          <div className="left">
            <h2 className="total">
              Total Challenges
            </h2>
            <p className="no-of-tasks">
              5
            </p>
          </div>
          <div className="right">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="46" viewBox="0 0 120 46" fill="none">
              <path d="M18.681 25.8747C7.26571 25.8747 4.31004 46 0 46H120V0C110.076 0 114.218 23.0803 97.4534 23.0803C82.9303 23.0803 83.9935 14.214 76.1973 14.214C69.4477 14.214 69.4477 23.7507 61.104 23.7507C46.7757 23.7507 47.8783 14.214 40.3109 14.214C32.7435 14.214 30.0963 25.8747 18.681 25.8747Z" fill="url(#paint0_linear_1_750)" />
              <defs>
                <linearGradient id="paint0_linear_1_750" x1="-10.4938" y1="-4.8051" x2="-9.99669" y2="46.6759" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFDA8E" />
                  <stop offset="1" stop-color="white" stop-opacity="0.01" />
                </linearGradient>
              </defs>
            </svg>
          </div>
                </div>
      <p className="percentage">
        42% challenges completed
      </p>
        </div>
    </div>
  )
}

export default Card
