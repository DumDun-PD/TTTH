import './App.css';
import ReactPlayer from 'react-player';

function App() {
  const vidUrl = "https://www.facebook.com/reel/2295919117874390";
  return (
    <div className='App'>
      <h1>React Player ex</h1>
      <ReactPlayer
        url={vidUrl}
        playing={false}
        volume={0.5}
      />
    </div>
  );
}

export default App;
