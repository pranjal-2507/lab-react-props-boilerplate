import { Component } from "react";
import "./App.css"




export default class AppClass extends Component{
 constructor(props){
  super()
  this.data = props;

 }

  // code here
  render(){
    this.data = this.imageData()

    let gallerystyle = {
      textAlign:"center"
    }
  
    let styleMyDiv = {
      display:"grid",
      gridTemplateColumns:"50% 45%",
      placeItems: "center",
      gap:"20px"
      
    }
    
    return(
      <>
    <h1 style={gallerystyle}>Kalvium Gallery</h1>
    <div style={styleMyDiv}>
      <img src={this.data.props[0].img} alt="" width={720}px/>
      <img src={this.data.props[1].img} alt="" width={720}px/>
      <img src={this.data.props[2].img} alt="" width={720}px/>
      <img src={this.data.props[3].img} alt="" width={720}px/>
    </div>
    </>
    )
  }
}
