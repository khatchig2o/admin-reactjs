import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './index.scss'

export default function Addstudent({ edits, disAppear }) {
    const dispatch = useDispatch()
    const store = useSelector(store => store.STUDENTS)

    const [students, setStudents] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
    })

    const [studentsError, setstudentsError] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
    })

    const changeStudent = (e) => {
        setStudents({ ...students, [e.target.name]: e.target.value })
        setstudentsError({ ...studentsError, [e.target.name]: '' })
    }

    const submitStudent = () => {
        let validatiom = true
        let texts = {
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: ''
        }
        if (!students.firstName.trim().length) {
            texts.firstName = 'pleas fill the firstName'
            validatiom = false
        }
        if (!students.lastName.trim().length) {
            texts.lastName = 'pleas fill the lastName'
            validatiom = false
        }
        if (!students.address.trim().length) {
            texts.address = 'pleas fill the address'
            validatiom = false
        }
        if (!students.phoneNumber.trim().length) {
            texts.phoneNumber = 'pleas fill the phoneNumber'
            validatiom = false
        }
        if (students.phoneNumber.trim().length && students.phoneNumber.trim().length < 8 || students.phoneNumber.trim().length && students.phoneNumber.trim().length > 9) {
            texts.phoneNumber = 'pleas fill valid phoneNumber'
            validatiom = false
        }
        if (validatiom) {
            if (edits >= 0) {
                dispatch({ type: 'EditStudent', payload: { number: edits, paylnewstate: students } })
            } else if (validatiom) {
                dispatch({ type: 'AddStudent', payload: students })
            }
            setStudents({
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: ''
            })
            disAppear()
        } else {
            setstudentsError(texts)
        }
    }
    useEffect(() => {
        if (edits > -1) {
            setStudents(store[edits])
        }
    }, [])

    return <div className="P-adding-zone">

        <button onClick={disAppear}>X</button>
        <div className="p-inout-field">
            <label>
                firstName :
                <input type="text" value={students.firstName} name='firstName' onChange={changeStudent} />
            </label>
            {studentsError.firstName ? <p className="p-error-text">{studentsError.firstName}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                lastName :
                <input type="text" value={students.lastName} name='lastName' onChange={changeStudent} />
            </label>
            {studentsError.lastName ? <p className="p-error-text">{studentsError.lastName}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                address :
                <input type="text" value={students.address} name='address' onChange={changeStudent} />
            </label>
            {studentsError.address ? <p className="p-error-text">{studentsError.address}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                phoneNumber :
                <input type="number" value={students.phoneNumber} name='phoneNumber' onChange={changeStudent} />
            </label>
            {studentsError.phoneNumber ? <p className="p-error-text">{studentsError.phoneNumber}</p> : ''}
        </div>

        <button onClick={submitStudent}>SAVE</button>
    </div>
}