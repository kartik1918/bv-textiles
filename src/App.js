import "./App.css";
import { useState } from "react";
import fabric1 from "./assets/imgs/fabric-1.jpg"
import fabric2 from "./assets/imgs/fabric-2.jpg"
import fabric3 from "./assets/imgs/fabric-3.jpg"
import Header from "./components/Header";

const headerImages = [
  {
    url: fabric1,
    alt: "fabric1"
  },
  {
    url: fabric2,
    alt: "fabric2"
  },
  {
    url: fabric3,
    alt: "fabric3"
  }
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="App">
      <Header currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} headerImages={headerImages} />
    </div>
  );
}

export default App;
