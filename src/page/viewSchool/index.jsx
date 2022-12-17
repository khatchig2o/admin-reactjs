import React from "react";
import { useSelector } from "react-redux";
import './index.scss'

export default function ViewSchool() {
    const school = useSelector(store => store.ViewBox.BoxInfo)
    return <div className="P-view-box">
        <h1>schoolName : {school.schoolName}</h1>
        <p>address : {school.address}</p>
        <p>directorName : {school.directorName}</p>
        <p>directorPhoneNumber : {school.directorPhoneNumber}</p>
        <p>directorEmailAddress : {school.directorEmailAddress}</p>
        <p>teachersMaxCount : {school.teachersMaxCount}</p>
        <p>childrenMaxCount : {school.childrenMaxCount}</p>
        <p>fond : {school.fond}</p>
    </div>
}