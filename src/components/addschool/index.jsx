import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './index.scss'

export default function AddSchool({ edits, disAppear }) {
    const dispatch = useDispatch()
    const store = useSelector(store => store.SCHOOLS)

    const [schools, setSchools] = useState({
        schoolName: '',
        address: '',
        directorName: '',
        directorPhoneNumber: '',
        directorEmailAddress: '',
        teachersMaxCount: 0,
        childrenMaxCount: 0,
        teachersList: [],
        childrenList: [],
        fond: 0,
    })

    const [schoolsError, setSchoolserror] = useState({
        schoolName: '',
        address: '',
        directorName: '',
        directorPhoneNumber: '',
        directorEmailAddress: '',
        teachersMaxCount: '',
        childrenMaxCount: '',
        fond: '',
    })

    const changSchool = (e) => {
        setSchools({ ...schools, [e.target.name]: e.target.value })
        setSchoolserror({ ...schoolsError, [e.target.name]: '' })
    }

    const submitSchool = () => {
        let validatiom = true
        let texts = {
            schoolName: '',
            address: '',
            directorName: '',
            directorPhoneNumber: '',
            directorEmailAddress: '',
            teachersMaxCount: '',
            childrenMaxCount: '',
            fond: '',
        }
        if (!schools.schoolName.trim().length) {
            texts.schoolName = 'pleas fill the name'
            validatiom = false
        }
        if (!schools.address.trim().length) {
            texts.address = 'pleas fill the address'
            validatiom = false
        }
        if (!schools.directorName.trim().length) {
            texts.directorName = 'pleas fill the directorName'
            validatiom = false
        }
        if (!schools.directorPhoneNumber.trim().length) {
            texts.directorPhoneNumber = 'pleas fill the directorPhoneNumber'
            validatiom = false
        }
        if (!schools.directorEmailAddress.trim().length) {
            texts.directorEmailAddress = 'pleas fill the directorEmailAddress'
            validatiom = false
        }
        if (schools.directorPhoneNumber.trim().length && schools.directorPhoneNumber.trim().length < 8 || schools.directorPhoneNumber.trim().length && schools.directorPhoneNumber.trim().length > 9) {
            texts.directorPhoneNumber = 'pleas fill valid number'
            validatiom = false
        }
        if (!schools.directorEmailAddress.trim().length) {
            texts.directorEmailAddress = 'pleas fill the directorEmailAddress'
            validatiom = false
        }
        if (schools.childrenMaxCount <= 0) {
            texts.childrenMaxCount = 'pleas fill the childrenMaxCount'
            validatiom = false
        }
        if (schools.teachersMaxCount <= 0) {
            texts.teachersMaxCount = 'pleas fill the teachersMaxCount'
            validatiom = false
        }
        if (validatiom) {
            if (edits >= 0) {
                dispatch({ type: 'editSchool', payload: { number: edits, paylnewstate: schools } })
            } else if (validatiom) {
                dispatch({ type: 'addSchool', payload: schools })
            }
            setSchools({
                schoolName: '',
                address: '',
                directorName: '',
                directorPhoneNumber: '',
                directorEmailAddress: '',
                teachersMaxCount: 0,
                childrenMaxCount: 0,
                teachersList: [],
                childrenList: [],
                fond: 0,
            })
            disAppear()
        }else{
            setSchoolserror(texts)
        }
    }
    useEffect(() => {
        if (edits > -1) {
            setSchools(store[edits])
        }
    }, [])

    return <div className="P-adding-zone">

        <button onClick={disAppear}>X</button>
        <div className="p-inout-field">
            <label>
                schoolName :
                <input type="text" value={schools.schoolName} name='schoolName' onChange={changSchool} />
            </label>
            {schoolsError.schoolName ? <p className="p-error-text">{schoolsError.schoolName}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                address :
                <input type="text" value={schools.address} name='address' onChange={changSchool} />
            </label>
            {schoolsError.address ? <p className="p-error-text">{schoolsError.address}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                directorName :
                <input type="text" value={schools.directorName} name='directorName' onChange={changSchool} />
            </label>
            {schoolsError.directorName ? <p className="p-error-text">{schoolsError.directorName}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                directorPhoneNumber :
                <input type="number" value={schools.directorPhoneNumber} name='directorPhoneNumber' onChange={changSchool} />
            </label>
            {schoolsError.directorPhoneNumber ? <p className="p-error-text">{schoolsError.directorPhoneNumber}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                directorEmailAddress :
                <input type="number" value={schools.directorEmailAddress} name='directorEmailAddress' onChange={changSchool} />
            </label>
            {schoolsError.directorEmailAddress ? <p className="p-error-text">{schoolsError.directorEmailAddress}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                teachersMaxCount :
                <input type="number" value={schools.teachersMaxCount} name='teachersMaxCount' onChange={changSchool} />
            </label>
            {schoolsError.teachersMaxCount ? <p className="p-error-text">{schoolsError.teachersMaxCount}</p> : ''}
        </div>
        <div className="p-inout-field">
            <label>
                childrenMaxCount :
                <input type="number" value={schools.childrenMaxCount} name='childrenMaxCount' onChange={changSchool} />
            </label>
            {schoolsError.childrenMaxCount ? <p className="p-error-text">{schoolsError.childrenMaxCount}</p> : ''}
        </div>
        <button onClick={submitSchool}>SAVE</button>
    </div>
}