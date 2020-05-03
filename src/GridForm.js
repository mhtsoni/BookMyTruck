import React from "react";
import "./App.css";
class GridForm extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [{ques:"What is OnLeaf Truck Booking App", uri: "https://www.youtube.com/watch?v=xOaTlmd4miw&feature=youtu.be"},
        {ques:"How to book a truck", uri: "https://www.youtube.com/watch?v=foMsSf7Fjpo"}
        ],
        appName: 'OnLeaf FAQ',
        list: undefined,
        source:'https://www.youtube.com/watch?v=foMsSf7Fjpo'
      };
    }
    clickHandler=(src)=>{
        this.setState({
            source: src
        });
    }
    searchData(e) {
      var queryData = [];
      if(e.target.value != '') {
        this.state.data.forEach(function(person) {
  
            if(person.ques.toLowerCase().indexOf(e.target.value)!=-1) {
              if(queryData.length < 10) {
                queryData.push(person);
              }
            }
        });
      }
      this.setState({list: queryData});
    }
    render() {
      return(
        <div className="app">
          <Title name={this.state.appName} />
          <SearchBar search={(e)=>this.searchData(e)} />
          {(this.state.list) ? <SearchResult handler={this.clickHandler.bind(this)} data={this.state.list} /> : null  }
          <Video url={this.state.source}/>
        </div>
      )
    }
  }
  
  class Title extends React.Component {
    render() {
      return(
        <div>
          <h1>{this.props.name}</h1>
        </div>
      )
    }
  }
  
  class SearchBar extends React.Component {
    render() {
      return(
        <div>
          <input onChange={this.props.search} placeholder="Search Query"/>
        </div>
      )
    }
  }
  
  class SearchResult extends React.Component {
      caller(sr){

      }
    render() {
        const pass=this.props.handler;
      return (
        <div>
          <ul>
            {this.props.data.map(function(value) {
                return <Item passed={pass} key={value.uri} val={value.ques} link={value.uri} />
            })}
          </ul>
        </div>
      )
  
    }
  
  }
  
  class Item extends React.Component {
    render() {
      return(
        <li onClick={()=>this.props.passed(this.props.link)}>
          {this.props.val}
        </li>
      )
    }
  
  }
  class Video extends React.Component{
        render(){
            var ur = this.props.url;
            var id = ur.match("v=([a-zA-Z0-9]+)&?")[1]; //sGbxmsDFVnE

            var embedlink = "http://www.youtube.com/embed/" + id;
            return (<iframe className="video" src={embedlink}></iframe>);
        }
  }
  export default GridForm;