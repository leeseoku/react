import React from 'react'
import "../css/Leeseoku.css";


const Header=()=>{
    return (
        <>
        <div className="header d-flex jcb">
            <h1><a href="" className="d-block"><img src="./img/logo.svg" alt="" /></a></h1>
            <ul id="gnb" className="d-flex">
                <li className="">
                    <a href="" className="d-block">Life</a>
                </li>
                <li className="">
                    <a href="" className="d-block">Skill</a> 
                </li>
                <li className="">
                    <a href="" className="d-block">Time</a>   
                </li>
                <li className="">
                    <a href="" className="d-block">Purpose</a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Header


