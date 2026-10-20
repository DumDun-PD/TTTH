import './App.css';
import { useEffect, useState } from 'react';

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "browie"]);
    } else {
      setData(["water", "soda", "jucie"]);
    }
  }, []);
  return render(data);
};

const DessertCount = () => {
  return (
    <DataFetcher
      url="http://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="http://littlelemon/drinks"
      render={(data) => <p>{data.length} drinks</p>}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="header">Little Lemon Restaurant</header>
      <DessertCount />
      <DrinksCount />
    </div>
  );
}

export default App;
