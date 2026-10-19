import React from 'react';
import './App.css';

function App() {
  const formInputRef = React.useRef(null);

  const forcusInput = () => {
    formInputRef.current.forcus();
  }
  return (
    <>
      <h1>Using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text" />
      <button onClick={forcusInput}>
        Forcus input
      </button>
    </>
  );
}

export default App;
