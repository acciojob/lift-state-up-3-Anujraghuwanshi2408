
import React , {useState} from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {

 const[selectedOption , setSelectedOption] = useState("");
  
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Child  name = "Child Component 1"
                btn = "Option 1"
                fun = {setSelectedOption}
        />
        <Child  name = "Child Component 2"
                btn = "Option 2"
                fun = {setSelectedOption}
        />
        <p> Selected Option : {selectedOption}</p>
    </div>
  )
}

export default App
