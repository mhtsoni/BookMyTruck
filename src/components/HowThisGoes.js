import React from 'react'
import processImg from "../images/process_img.png"
function HowThisGoes() {
    return (
            <div style={{marginTop:"10%"}} className="headSection">
                <div id="hsDiv2">
                  <h1 id="hsHeading"><span>HOW THIS </span><span  style={{color:"white"}}>GOES</span></h1>
                  <ul style={{listStyleType:"none"}}>
                    <li><span style={{color:"blue", fontWeight:"900"}}>Step 1:</span> Open your broser and visit BookMyTruck.com.</li>
                    <li><span style={{color:"blue", fontWeight:"900"}}>Step 2:</span> Login to your cccount. ...</li>
                    <li><span style={{color:"blue", fontWeight:"900"}}>Step 3:</span> Fill the form to add start and destination location. ...</li>
                    <li><span style={{color:"blue", fontWeight:"900"}}>Step 4:</span> Then select the truck type and date. ...</li>
                    <li><span style={{color:"blue", fontWeight:"900"}}>Step 5:</span> Wait for confirmation Email.</li>
                  </ul>
                </div>
                <div id="hsDiv1">
                    <img className="processImg" src={processImg} alt="Truck Image With Mobile"/>
                </div>
                
            </div>
    )
}

export default HowThisGoes
