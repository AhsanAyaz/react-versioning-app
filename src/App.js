import './App.css';
import ReleaseLogs from './components/ReleaseLogs/ReleaseLogs';
import { useState } from 'react';
import ReleaseForm from './components/ReleaseForm/ReleaseForm';
import ReleaseLog from './classes/ReleaseLog';
import compareVersions from './utils/compareVersions';

function App() {
  const [logsHash, setLogshash] = useState({});
  const [releaseLogs, setReleaseLogs] = useState([]);
  const addNewRelease = ({ app, version }) => {
    if (logsHash[app]) {
      const compare = compareVersions(version, logsHash[app]);
      if (compare < 1) {
        alert(
          'You can not release a version that is not greater than the last released version'
        );
        return;
      }
    }
    const newRelease = new ReleaseLog(app, version);
    setReleaseLogs([newRelease, ...releaseLogs]);

    setLogshash({
      ...logsHash,
      ...{ [app]: version },
    });
  };
  console.log('logsHash', logsHash);
  return (
    <div className="App container">
      <div className="version-control">
        <div className="version-control__inner">
          <ReleaseForm createRelease={addNewRelease} />
        </div>
        <div className="version-control__inner">
          <ReleaseLogs logs={releaseLogs} />
        </div>
      </div>
    </div>
  );
}

export default App;
