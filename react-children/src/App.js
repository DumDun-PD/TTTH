import * as React from "react";
import './App.css';

const Row = ({ children, spacing }) => {
  return (
    <div className="Row" style={{ gap: `${spacing}px` }}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default App;
