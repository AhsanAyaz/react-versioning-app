import React, { useState } from 'react';
import { APPS } from '../../constants/apps';
import { REGEXES } from '../../constants/regexes';
import './ReleaseForm.css';

const ReleaseForm = ({ createRelease }) => {
  const [app, setApp] = useState('');
  const [version, setVersion] = useState('');
  const [versionError, setVersionError] = useState(false);
  const apps = Object.values(APPS);
  const formSubmit = (event) => {
    event.preventDefault();
    createRelease({ app, version });
  };

  const isSubmitDisabled = () => {
    return !app || !version;
  };
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="appName">Select App</label>
          <select
            className="form-control"
            id="appName"
            value={app}
            onChange={(event) => {
              setApp(event.target.value);
            }}
          >
            <option value="">--Choose--</option>
            {apps.map((appName) => (
              <option key={appName} value={appName}>
                {appName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="versionNumber">Version Number</label>
          <input
            type="text"
            className="form-control"
            id="versionNumber"
            aria-describedby="versionHelp"
            placeholder="Enter version number"
            onChange={(ev) => {
              const version = ev.target.value;
              if (!REGEXES.SEMANTIC_VERSION.test(version)) {
                setVersionError(true);
                return;
              }
              setVersion(ev.target.value);
              setVersionError(false);
            }}
          />
          <small id="versionHelp" className="form-text text-muted">
            Use semantic versioning (x.x.x)
          </small>
          {versionError && (
            <div className="alert alert-danger">
              Please write an appropriate version number
            </div>
          )}
        </div>
        <button
          disabled={isSubmitDisabled()}
          type="submit"
          onClick={formSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ReleaseForm;
