import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Store from "../Store";
import Nav from "./Nav";

const App = () => {
    return (
            <div className="App">
            <Nav />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/store' element={<Store />} />
            </Routes>


            </div>

  );
}

export default App;
