import React from 'react'
import processImg from "../images/process_img.png"
function HowThisGoes() {
    return (
            <div style={{marginTop:"10%"}} className="headSection howThisGoes">
                <div id="hsDiv2">
                  <h1 id="hsHeading"><span>TRACK YOUR </span><span  style={{color:"white"}}>TRUCK</span></h1>
                  <ul style={{listStyleType:"none"}}>
                    <li><span style={{color:"white", fontWeight:"900"}}>-></span> Open your broser and visit BookMyTruck.com.</li>
                    <li><span style={{color:"white", fontWeight:"900"}}>-></span> Login to your account. ...</li>
                    <li><span style={{color:"white", fontWeight:"900"}}>-></span> Fill the form to request a truck. ...</li>
                    <li><span style={{color:"white", fontWeight:"900"}}>-></span> Load your goods. ...</li>
                    <li><span style={{color:"white", fontWeight:"900"}}>-></span> Go to track truck section and see live location of your truck.</li>
                  </ul>
                </div>
                <div id="hsDiv1">
                    <img className="processImg" src={processImg} alt="Truck Image With Mobile"/>
                </div>
                
            </div>
    )
}

export default HowThisGoes
