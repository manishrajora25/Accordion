





import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import "./App.css";

function App() {
  const [showText, setCount] = useState(null);

  function toggle(section) {
    setCount((prevSection) => (prevSection === section ? null : section));
  }
  return (
    <div>
     
      <div className="parent">
        <p>HTML</p>
        <span onClick={() => toggle("HTML")}>
          <FaCirclePlus />
        </span>
      </div>

      <p className="para"style={{ display: showText === "HTML" ? "block" : "none" }} >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
        reprehenderit perferendis a veritatis debitis. Expedita dolores facere
        magni quia in.</p>

      
      <div className="parent">
        <p>CSS</p>
        <span onClick={() => toggle("CSS")}>
          <FaCirclePlus />
        </span>
      </div>

      <p className="para"style={{ display: showText === "CSS" ? "block" : "none" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
        reprehenderit perferendis a veritatis debitis. Expedita dolores facere
        magni quia in.</p>

      
      <div className="parent">
        <p>JAVASCRIPT</p>
        <span onClick={() => toggle("JavaScript")}>
          <FaCirclePlus />
        </span>
      </div>

      <p className="para"style={{ display: showText === "JavaScript" ? "block" : "none" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
        reprehenderit perferendis a veritatis debitis. Expedita dolores facere
        magni quia in.</p>

      
      <div className="parent">
        <p>REACT</p>
        <span onClick={() => toggle("React")}>
          <FaCirclePlus />
        </span>
      </div>
      <p
        className="para"style={{ display: showText === "React" ? "block" : "none" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
        reprehenderit perferendis a veritatis debitis. Expedita dolores facere
        magni quia in.</p>
    </div>
  );
}1

export default App;
