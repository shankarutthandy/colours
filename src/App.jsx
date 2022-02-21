import React, { Component } from 'react'
import TopBar from './Components/TopBar/TopBar'
import Palette from './Components/Palette/Palette'
var database={
  favouriteColors:[],
  favouritePalettes:[]
}
function find(e,arr){
  for(let i=0;i<arr.length;i++){
    if(e===arr[i])return i;
  }
  return -1;
}
function arrayEquals(a,b){
  var x=a.length;
  var res=true;
  for(let i=0;i<x;i++)
  {
    if(!res)return res;
    res&=(a[i]===b[i])
  }
  return res;
}
export default class App extends Component {
  constructor(){
    super();
    this.state={
      colors:['blue','green','red','pink','purple'],
      shuffle:[false,false,false,false,false],
      menu:false,
      saved:false,
      favourite:[false,false,false,false,false]
    }
  }
  onShuffleClick=()=>{
    var o = Math.round, r = Math.random, s = 255;
    var out=[...this.state.colors];
    for(let i=0;i<5;i++)
    {
    if(this.state.shuffle[i])continue;
    out[i]='rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    var s=true;
    this.state.shuffle.forEach(e=>{s=s&e});
    var fav=this.state.favourite;
    for(let i=0;i<5;i++)
      fav[i]=fav[i]&this.state.shuffle[i]
    this.setState({colors:out,saved:s,favourite:fav});
  }
  onLock=(idx)=>{
    var out=this.state.shuffle;
    out[idx]=!out[idx];
    this.setState({shuffle:out});
  }
  onFavColor=(c)=>{
    let idx=find(c,this.state.colors);
    if(this.state.favourite[idx])return;
    if(find(c,database.favouriteColors)>-1)return;
    database.favouriteColors.push(c);
    let v=this.state.favourite
    v[idx]=true
    this.setState({favourite:v})
  }
  onFavPalette=()=>{
    if(this.state.saved)return;
    var arr=[...this.state.colors]
    database.favouritePalettes.push(arr);
    this.setState({saved:true})
  }
  onMenuClick=()=>{
    this.setState({menu:!this.state.menu})
  }
  onPaletteDelete=(k)=>{
    var del=database.favouritePalettes[k];
    database.favouritePalettes.splice(k,1);
    if(arrayEquals(del,this.state.colors)){
      this.setState({saved:false});
    }
  }
  onFavDelete=(k)=>{
    var del=database.favouriteColors[k];
    database.favouriteColors.splice(k,1);
    var idx=find(del,this.state.colors)
    if(idx>=0)
    {
      var fav=[...this.state.favourite];
      fav[idx]=false;
      this.setState({favourite:fav})
    }
  }
  onUpdateColors=(c)=>{
    var arr=[...database.favouritePalettes[c]]
    this.setState({colors:arr,saved:true,favourite:[false,false,false,false,false]})
  }
  copyColorClipBoard=(c)=>{
    navigator.clipboard.writeText(c);
  }
  render() {
    return (
      <>
      <TopBar onClick={this.onShuffleClick} 
      onFavPalette={this.onFavPalette} 
      onMenuClick={this.onMenuClick}
      saved={this.state.saved}
      />
      <Palette 
      colors={this.state.colors} 
      onLock={this.onLock} 
      shuffle={this.state.shuffle} 
      onFavColor={this.onFavColor} 
      menu={this.state.menu}
      favourites={database.favouriteColors}
      saves={database.favouritePalettes}
      addedFav={this.state.favourite}
      onPaletteDelete={this.onPaletteDelete}
      onFavDelete={this.onFavDelete}
      onPaletteClick={this.onUpdateColors}
      onCopyColor={this.copyColorClipBoard}
      />
      </>
    )
  }
}

