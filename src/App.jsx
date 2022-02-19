import React, { Component } from 'react'
import TopBar from './Components/TopBar/TopBar'
import Palette from './Components/Palette/Palette'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      colors:['blue','green','red','pink','purple'],
      shuffle:[false,false,false,false,false]
    }
  }
  onShuffleClick=()=>{
    var o = Math.round, r = Math.random, s = 255;
    var out=this.state.colors;
    for(let i=0;i<5;i++)
    {
    if(this.state.shuffle[i])continue;
    out[i]='rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    this.setState({colors:out})
  }
  onLock=(idx)=>{
    var out=this.state.shuffle;
    out[idx]=!out[idx];
    this.setState({shuffle:out});
  }
  render() {
    return (
      <>
      <TopBar onClick={this.onShuffleClick}/>
      <Palette colors={this.state.colors} onLock={this.onLock} shuffle={this.state.shuffle}/>
      </>
    )
  }
}

