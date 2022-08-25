import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState<string>();
  useEffect(() => {
    fetch("/records")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return <div className="App">This is my solo-project!{message}</div>;
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
