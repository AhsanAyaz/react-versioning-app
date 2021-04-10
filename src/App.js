import './App.css';
import ReleaseLogs from './components/ReleaseLogs/ReleaseLogs';
import { useState } from 'react';
import ReleaseForm from './components/ReleaseForm/ReleaseForm';
import ReleaseLog from './classes/ReleaseLog';

function App() {
  const [logsHash, setLogshash] = useState({});
  const [releaseLogs, setReleaseLogs] = useState([]);
  const addNewRelease = ({ app, version }) => {};
  console.log(logsHash);
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
