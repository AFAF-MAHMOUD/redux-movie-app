import {connect} from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import Card from  './Card'
class App extends Component {

  add=()=> {

    let name=this.props.nameReducers;
let img=this.props.imgReducers ;
let rating=this.props.ratingReducers


    this.props.ADD_MOVIE(rating,name,img)
  }


  star=(e)=>{

this.props.FILTER_STAR(e)
  }


   render() {
    return (
    <div className="movie-app">
      <header className="header">
        <input type='text' placeholder="Search" onChange={(e) => this.props.FILTER_NAME(e)} />
        <span onClick ={()=>this.star(1)}>⭐</span>
        <span onClick ={()=>this.star(2)}>⭐</span>
        <span onClick ={()=>this.star(3)}>⭐</span>
        <span onClick ={()=>this.star(4)}>⭐</span>
        <span onClick ={()=>this.star(5)}>⭐</span>
       </header>
     {/* <Card input ={this.state.search} star = {this.state.star} movies = {this.state.movielist} />
  
 */}
      <p className="plus" onClick ={()=>this.setState({display:!this.state.display})}>+</p>
    { /*</div>* <div className ={this.state.display ? "display":"hidden"}>
       */}
       
      <div className ={this.props.DisplayReducers}>
       
        <input type="text" placeholder="name" name="name" onChange={(e)=>this.props.CHANGE_NAME(e)} />
        <input type="text" placeholder="Img" name="img" onChange={(e)=>this.props.CHANGE_IMG(e)} />
        <input type="text" placeholder="rating" name="rating" onChange={(e)=>this.props.CHANGE_Rating(e)} />
        <button onClick={this.add}>Add</button>
      </div>
    <Card movies = {this.props.ListMoviesReducers} filtername={this.props.filterName }  filterstar={this.props.filterStar}   />
    </div>);
  }
}
const mapDispatchToProps = (dispatch) => {
      return {
        ADD_MOVIE:(ratingAdd,nameAdd,img)=>{
          dispatch({type:'add-Movie',ratingAdd:ratingAdd,nameAdd:nameAdd,img:img})},
        CHANGE_NAME:(e)=>{
          dispatch({type:'CHANGE_NAME',value:e.target.value}) },
        CHANGE_IMG:(e)=>{
          dispatch({type:'CHANGE_IMG',value:e.target.value})},
        CHANGE_Rating:(e)=>{
          dispatch({type:'CHANGE_Rating',value:e.target.value}) },
        FILTER_NAME:(e)=>{
          dispatch({type:'FILTER_NAME',value:e.target.value})},
          FILTER_STAR:(e)=>{
            dispatch({type:'FILTER_STAR',value:e})},

    }
}
const mapStateToProps = ({ListMoviesReducers,DisplayReducers,nameReducers,imgReducers,ratingReducers,filterName,filterStar}) => {
 return {
  ListMoviesReducers:ListMoviesReducers,
  DisplayReducers:DisplayReducers,
  nameReducers:nameReducers,
imgReducers:imgReducers,
ratingReducers:ratingReducers,
filterName:filterName,
filterStar:filterStar,
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(App)