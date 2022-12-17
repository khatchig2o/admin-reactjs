import React from "react";
// import './index.scss'
import { Link } from "react-router-dom";

export default function Header() {
    return <header>
        <h1>the schools project</h1>

        <ul>
            <li>
                <Link to='/'>
                    school
                </Link>
            </li>
            <li>
                <Link to='/teacher'>
                    teachers
                </Link>
            </li>
            <li>
                <Link to='/students'>
                    students
                </Link>
            </li>
        </ul>
    </header>
}