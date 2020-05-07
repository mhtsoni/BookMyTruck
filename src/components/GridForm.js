import React from "react";
import "../App.css";
class GridForm extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [{ques:"What if the car shows up late?", uri: "https://www.youtube.com/watch?v=d0IvkU0tEtg", ans:"We try our best to ensure our partners reach our customers on time. But in case of delays, do call us and we will help you out by either providing an alternate vehicle or giving you a full refund."},
        {ques:"Do I need to register on your site to book tickets?", uri: "https://www.youtube.com/watch?v=foMsSf7Fjpo",ans: "No. You can use our service fully without the need to register. You just need to provide your details at the time of booking."}
        ],
        appName: 'BOOK MY TRUCK FAQ',
        list: undefined,
        source:'https://www.youtube.com/watch?v=foMsSf7Fjpo'
      };
    }
    clickHandler=(src,desc)=>{
        this.setState({
            source: src,
            ans: desc,
            list: undefined
        });
        document.getElementById("search").value="";
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
          <Video url={this.state.source} desc={this.state.ans}/>
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
    constructor(props){
      super(props);
      this.inputRef=React.createRef();
    }
    componentDidMount(){
      this.inputRef.current.focus();
    }
    render() {
      return(
        <div>
          <input ref={this.inputRef} id="search" onChange={this.props.search} placeholder="Search Query"/>
        </div>
      )
    }
  }
  
  class SearchResult extends React.Component {
    render() {
        const pass=this.props.handler;
      return (
        <div>
          <ul>
            {this.props.data.map(function(value) {
                return <Item passed={pass} key={value.uri} val={value.ques} link={value.uri}  des={value.ans}/>
            })}
          </ul>
        </div>
      )
  
    }
  
  }
  
  class Item extends React.Component {
    render() {
      return(
        <li onClick={()=>this.props.passed(this.props.link,this.props.des)}>
          {this.props.val}
        </li>
      )
    }
  
  }
  class Video extends React.Component{
        render(){
            var ur = this.props.url;
            var id = ur.match("v=([a-zA-Z0-9]+)&?")[1]; //sGbxmsDFVnE

            var embedlink = "https://www.youtube.com/embed/" + id /*+"?autoplay=1"*/;
            return (
            <div>
                <iframe  className="video" src={embedlink}></iframe><br/>
                <p>{this.props.desc}</p>
            </div>
            );
        }
  }
  export default GridForm;