import {React, useState} from "react";
import "./App.css";
import BhagatSingh from "./components/BhagatSingh";
import UdhamSingh from "./components/UdhamSingh";
import { Switch,Divider } from "antd";


function App() {
  const [color, setColor] = useState("white")
  function handleclick() {
    if (color === "white") {
     setColor("black")
      console.log("Color is " + color)
    } else {
      setColor("white")
      console.log("Color is " + color)
    }
  }

  return (
    <div className="App" >
      <div className={color==="white" ? "whitetheme" : "blacktheme"}>
      <Switch onChange={handleclick} />
      <BhagatSingh />
     <Divider/>
      <UdhamSingh />
      </div>
    </div>
  );
}

export default App;
