
import React from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandle = () => {
    setToggle(!toggle);
  }

  React.useEffect(() => {
    document.title = toggle ? "Wellcome to Little Lemon" : "Using the useEffect hook"
  }, []);
  return (
    <div className="App">
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandle}>
        Toggle message
      </button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}

export default App;
