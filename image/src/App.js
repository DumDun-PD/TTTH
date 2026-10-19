import rooftops from './assets/images/Tepi.jpg'
import './App.css';

function App() {
  const randomImageUrl = "https://picsum.photos/200/300"
  // picsum
  return (
    <div >
      <h1>
        Task: add 3 images
      </h1>
      <img
        height={200}
        src={rooftops}
        alt="An image of a rooftop in New York"
      />
      <img
        height={200}
        src={require("./assets/images/Tepi.jpg")}
        alt='An image of a central park'
      />
      <img
        src={randomImageUrl}
        height={200}
      />
    </div>

  );
}

export default App;
