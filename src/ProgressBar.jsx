import React from 'react';

    function ProgressBar({ progress, current, total }) {
      return (
        <div>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">
            {current} of {total}
          </div>
        </div>
      );
    }

    export default ProgressBar;
