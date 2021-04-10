import React from 'react';
import './ReleaseLogs.css';

const ReleaseLogs = ({ logs }) => {
  return (
    <>
      <h5>Releases Logs</h5>
      <div className="logs">
        {logs.map((log, index) => {
          return (
            <div key={index} className="logs__item">
              {log.message}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReleaseLogs;
