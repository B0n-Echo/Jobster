import { useState, useEffect } from 'react';

function App() {
  
  const [jobs, setjobs] = useState([]);
  const [filters, setfilters] = useState([]);


  return (
    <div className="App">
      <header className="bg-green-700 mb-14">
        <img src="/images/bg-header-desktop.svg" alt="bg-header" />
      </header>
    </div>
  );
}

export default App;
