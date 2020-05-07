import React, { Component } from 'react'
import headImage from "../images/head_section.png";
import Locd from './Location_destination.js';
import Loc from './Location_source.js';
import SelectTruck from './SelectTruck.js';
import getDistance from 'geolib/es/getDistance';
export class HeadSection extends Component {
    constructor(props){
    super(props);
        this.state={
        srclat:0,
        srclong:0,
        destlat:0,
        destlong:0,
        truck:0
        };
        this.latlong=this.latlong.bind(this);
        this.latlongsource=this.latlongsource.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
        this.getTruck=this.getTruck.bind(this);
    }
    /*check if date is a future date*/
    isFutureDate(idate){
      var today = new Date().getTime(),
          idate = idate.split("-");
  
      idate = new Date(idate[0], idate[1] - 1, idate[2]).getTime();
      return (today - idate) < 0;
  }
    /*Getting Truck Selection*/
    getTruck(x){
        this.setState({truck: x});
    }
    /*setting destination lattitude and longituge*/
    latlong(x,y){
        this.setState({
          destlat:x,
          destlong:y
        });
      }
      /*setting source lattitude and longituge*/
      latlongsource(x,y){
        this.setState({
          srclat:x,
          srclong:y
        });
      }  
      submitHandler(start,end){
            if(this.state.truck>10){
                cost=this.state.truck;
            }
            else{
                var cost=15;
            }
            if((Math.floor(getDistance(start,end)/1000)*cost==0) || (this.state.destlat==0 && this.state.destlong==0) || (this.state.srclat==0 && this.state.srclong==0) || !(this.isFutureDate(document.getElementById("hsdate").value)) )
                alert("Please Fill All The Feilds correctly.");
            else
                alert("Estimated Fare is "+Math.floor(getDistance(start,end)/1000)*cost +" INR.") ;
      }  
    render() {
        return (
            <div className="headSection">
                <div id="hsDiv1">
                    <img src={headImage} alt="Truck Image With Mobile"/>
                </div>
                <div id="hsDiv2">
                  <h1 id="hsHeading"><span>BOOK TRUCKS </span><span  style={{color:"white"}}>SAVE BUCKS</span></h1>
                  <Loc cords={this.latlongsource}/>
                  <Locd cord={this.latlong} />
                  <SelectTruck val={this.getTruck}/>
                  <input type="date" id="hsdate"/>
                  <button className="hsButton" onClick={()=>this.submitHandler(
                { latitude: this.state.srclat, longitude: this.state.srclong },
                { latitude: this.state.destlat, longitude: this.state.destlong }
                  )}>Get Estimated Fare</button>
                </div>
            </div>
        )
    }
}

export default HeadSection
