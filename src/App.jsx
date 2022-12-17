import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import School from "./page/school";
import Students from "./page/students";
import Teachers from "./page/teachers";

export default function App() {
    return <div className="G-flex">
        <Header />
        <div className="main-feaild">
            <Routes>
                <Route path="/" element={<School />} />
                <Route path="/teacher" element={< Teachers/>} />
                <Route path='/students' element={< Students/>} />
                <Route path="*" element={<School />} />
            </Routes>
        </div>
    </div>
}