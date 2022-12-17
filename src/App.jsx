import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import School from "./page/school";
import Students from "./page/students";
import Teachers from "./page/teachers";
import ViewSchool from './page/viewSchool'

export default function App() {
    let schoolBox = useSelector(store => store.ViewBox)
    return <div className="G-flex">
        <Header />
        <div className="main-feaild">
            <Routes>
                <Route path="/" element={<School />} />
                <Route path="/teacher" element={< Teachers />} />
                <Route path='/students' element={< Students />} />
                {schoolBox.boxShow ? <Route path="/view-school" element={<ViewSchool />} /> : ''}
                <Route path="*" element={<School />} />
            </Routes>
        </div>
    </div>
}