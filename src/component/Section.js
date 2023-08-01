import React from 'react'
import Banner from "./component1/Banner";

const Section=()=>{
    return (
        <>
        <Banner></Banner>
      <div className="container-fluid mx-5 my-5">
            <section style={{height: "100vh"}} id="Life" >Section 1 Content</section>
            <section id="Skill" className="my-5 bg-dark"  style={{height: "100vh"}} >Section 1 Content</section>
            <section id="Time" className="my-5"  style={{height: "100vh"}} >Section 2 Content</section>
            <section id="Purpose" className="my-5 bg-light"  style={{height: "100vh"}} >Section 3 Content</section>
     </div>
        </>
    )
}

export default Section
