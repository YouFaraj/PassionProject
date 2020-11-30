import {React, useState} from "react";

const App = () => {
  const [name, setName] = useState('World');
  const [tempName, setTempName] = useState('');
  return (
    <div>
      <h1>Hello {name}</h1>
      <label>
        Name:
        <input type="text" onChange={(e) => setTempName(e.target.value)} />
      </label>
      <button onClick={() => setName(tempName)}>Change Name</button>
    </div>
  );
};
export default App;
