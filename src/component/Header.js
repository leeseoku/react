import React from 'react'
import Scrollspy from 'react-scrollspy';
import { Navbar, Nav } from 'react-bootstrap';

import "../css/Leeseoku.scss";


const Header=()=>{
    return (
        <>
        <Navbar expand="lg" fixed="top" className='header'>
            <h1><Navbar.Brand href="#home"><img src="./img/logo.svg" alt="" /></Navbar.Brand></h1>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Scrollspy items={['Life', 'Skill', 'Time','Purpose']} currentClassName="active" offset={-100}>
                <Nav className=" my-2 my-lg-0" navbarScroll as="ul">
                    <li><Nav.Link href="#Life">Life</Nav.Link></li>
                    <li><Nav.Link href="#Skill">Skill</Nav.Link></li>
                    <li><Nav.Link href="#Time">Time</Nav.Link></li>
                    <li><Nav.Link href="#Purpose">Purpose</Nav.Link></li>
                </Nav>
                </Scrollspy>
            </Navbar.Collapse>
        </Navbar>


        </>
    )
}

export default Header


//Navbar.Brand : a태그의 역할
//Navbar.Toggle : 햄버거 버튼   ,       aria-controls 와 Navbar.Collapse id 가 같아야함
//Navbar.Collapse : 버튼을 누르면 펼쳐짐
//Scrollspy : ul형태를 가지고 있으며 items의 이름과 <Nav.Link href="#여기가"> 같아야함
//Nav : Nav.Link 의 봉지
//Nav.Link : a태그의 형태를 가지고 있음  