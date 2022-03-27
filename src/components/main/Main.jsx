import "./Main.css";

import Home from "../../pages/home/Home";
import {  Routes, Route } from "react-router-dom";
import Profile from "../../pages/profile/Profile";


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/edit" element={<Home />} />
            </Routes>
        </main>
    )
}

export default Main;