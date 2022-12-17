import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Addstudent from '../../components/addstudent'

export default function Students() {
    const students = useSelector(store => store.STUDENTS)
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

    return <div className="G-flex-wrap p-info-parent">
        <div className="p-heading">
            <button onClick={appear} >Add student</button>
        </div>

        {students.length ?
            students.map((students, index) => (<div key={index} className='G-info-box'>
                <button onClick={() => {
                    setedits(index)
                    appear()
                }}>Eddit</button>
                <button onClick={() => remove(index)}>X</button>
                <h2>firstName : {students.firstName}</h2>
                <p>lastName : {students.lastName}</p>
                <p>address : {students.address}</p>
                <p>phoneNumber : {students.phoneNumber}</p>
            </div>)) : <h2>ther is no students found</h2>}
        {addZone ? <Addstudent disAppear={disAppear} edits={edits} /> : ''}
    </div >
}