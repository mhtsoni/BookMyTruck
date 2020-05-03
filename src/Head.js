import React from "react";
import './App.css';
class Head extends React.Component{
    render(){
        const menu=["Home","About Us","Contact Us"];
        const menuList=menu.map((items)=><li key={items.toString()}>{items}</li>);
    return (<div><ul className="header">{menuList}</ul></div>);
    }
}
class Foot extends React.Component{
    render(){
        return (<h1>This is a footer</h1>);
    }
}
export { Head,Foot};