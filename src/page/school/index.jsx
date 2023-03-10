import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddSchool from "../../components/addschool";

export default function School() {
    const schools = useSelector(store => store.SCHOOLS)
    const dispatch = useDispatch()

    const [addZone, setAddzone] = useState(false)
    const [edits, setedits] = useState(-1)

    const appear = () => {
        setAddzone(true)
    }
    const disAppear = () => {
        setAddzone(false)
    }

    const remove = (i) => {
        dispatch({ type: 'deleteSchool', payload: i })
    }
    const openBox = (school,index) => {
        dispatch({
            type: 'SHOWTHEBOX', payload: {
                boxShow: true,
                BoxInfo: school,
                Boxnumber : index
            }
        })
    }


    return <div className="G-flex-wrap p-info-parent">
        <div className="p-heading">
            <button onClick={appear} >Add school</button>
        </div>
        {schools.length ?
            schools.map((school, index) => (
                <div key={index} className='G-info-box'>
                    <button onClick={() => {
                        setedits(index)
                        appear()
                    }}>Eddit</button>
                    <button onClick={() => remove(index)}>X</button>
                    <h2> firstName : <Link to={`/view-school/${index}`} onClick={() => openBox(school,index)}>{school.schoolName}</Link></h2>
                    <p>address : {school.address}</p>
                    <p>directorName : {school.directorName}</p>
                    <p>directorPhoneNumber : {school.directorPhoneNumber}</p>
                    <p>directorEmailAddress : {school.directorEmailAddress}</p>
                    <p>teachersMaxCount : {school.teachersMaxCount}</p>
                    <p>childrenMaxCount : {school.childrenMaxCount}</p>
                    <p>fond : {school.fond}</p>
                </div>
            )) : <h2>ther is no school yet</h2>}
        {addZone ? <AddSchool disAppear={disAppear} setedits={setedits} type={'school'} edits={edits} /> : ''}
    </div>
}