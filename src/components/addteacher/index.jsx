import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './index.scss'

export default function Addstudent({ edits, disAppear }) {
    const dispatch = useDispatch()
    const store = useSelector(store => store.STUDENTS)

    const [tesacher, setteacher] = useState({
        firstName: '',
        lastName: '',
        profession: '',
        phoneNumber: '',
        salary: '',
        experience: ''
    })

    const [teacherEroro, setteacherEroro] = useState({
        firstName: '',
        lastName: '',
        profession: '',
        phoneNumber: '',
        salary: '',
        experience: ''
    })

    const changeStudent = (e) => {
        setteacher({ ...tesacher, [e.target.name]: e.target.value })
        setteacherEroro({ ...teacherEroro, [e.target.name]: '' })
    }

    const submitStudent = () => {
        let validatiom = true
        let texts = {
            firstName: '',
            lastName: '',
            profession: '',
            phoneNumber: '',
            salary: '',
            experience: ''
        }
        if (!tesacher.firstName.trim().length) {
            texts.firstName = 'pleas fill the firstName'
            validatiom = false
        }
        if (!tesacher.lastName.trim().length) {
            texts.lastName = 'pleas fill the lastName'
            validatiom = false
        }
        if (!tesacher.profession.trim().length) {
            texts.profession = 'pleas fill the profession'
            validatiom = false
        }
        if (!tesacher.phoneNumber.trim().length) {
            texts.phoneNumber = 'pleas fill the phoneNumber'
            validatiom = false
        }
        if (tesacher.phoneNumber.trim().length && tesacher.phoneNumber.trim().length < 8 || tesacher.phoneNumber.trim().length && tesacher.phoneNumber.trim().length > 9) {
            texts.phoneNumber = 'pleas fill valid phoneNumber'
            validatiom = false
        }
        if (validatiom) {
            if (edits >= 0) {
                dispatch({ type: 'EditStudent', payload: { number: edits, paylnewstate: tesacher } })
            } else if (validatiom) {
                dispatch({ type: 'AddStudent', payload: tesacher })
            }
            setteacher({
                firstName: '',
                lastName: '',
                profession: '',
                phoneNumber: '',
                salary: '',
                experience: ''
            })
            disAppear()
        } else {
            setteacherEroro(texts)
        }
    }
    useEffect(() => {
        if (edits > -1) {
            setteacher(store[edits])
        }
    }, [])

    return <div className="P-adding-zone">

        <button onClick={disAppear}>X</button>
        <div className="p-inout-field">
            <label>
                firstName :
                <input type="text" value={tesacher.firstName} name='firstName' onChange={changeStudent} />
            </label>
            {teacherEroro.firstName ? <p className="p-error-text">{teacherEroro.firstName}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                lastName :
                <input type="text" value={tesacher.lastName} name='lastName' onChange={changeStudent} />
            </label>
            {teacherEroro.lastName ? <p className="p-error-text">{teacherEroro.lastName}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                profession :
                <input type="text" value={tesacher.profession} name='profession' onChange={changeStudent} />
            </label>
            {teacherEroro.profession ? <p className="p-error-text">{teacherEroro.profession}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                phoneNumber :
                <input type="number" value={tesacher.phoneNumber} name='phoneNumber' onChange={changeStudent} />
            </label>
            {teacherEroro.phoneNumber ? <p className="p-error-text">{teacherEroro.phoneNumber}</p> : ''}
        </div>


        <button onClick={submitStudent}>SAVE</button>
    </div>
}