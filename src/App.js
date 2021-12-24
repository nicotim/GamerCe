import React from "react";
import Delay from "./Components/delay";
import { NavBar } from "./Components/navbar/navbar";



const App = () => {
    return (
        <div className = "App">
            <NavBar/>  
            <Delay/>
        </div>
    )
};

export default App;
