import React, { Component } from 'react'
import './Palette.css'
import ColorStrip from '../ColorStrip/ColorStrip'
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MenuWrapper from './MenuWrapper'
export default class Palette extends Component {
  constructor(){
    super();
    this.state={
      favourite:false,
      saved:false,
    }
  }
  onMenuFavClick=()=>{
    this.setState({favourite:true,saved:false})
  }
  onMenuSavedClick=()=>{
    this.setState({saved:true,favourite:false})
  }
  render() {
    var menuclass=this.props.menu?'menubar':'menubarclosed';
    var favourite=this.state.favourite?'closefav':'menutopopt';
    var saved=this.state.saved?'closesaved':'menutopopt';
    var fav=this.props.favourites.length?(this.props.favourites.map((e,key)=>{return (<div className='favcolor' key={key}><div  style={{backgroundColor:e}} className="favourite" onClick={()=>this.props.onCopyColor(e)} key={key}>
    <ContentCopyIcon className="copy"/>
    </div><div className='deleteopt' onClick={()=>{this.props.onFavDelete(key);this.setState({saved:false})}}><DeleteIcon className='deleteicon'/></div></div>)})):null;
    var sav=null;
    if(this.props.saves.length>0)
    {
      sav=this.props.saves.map((e,key)=>{
      return (<div className='menupalette' key={key} onClick={()=>this.props.onPaletteClick(key)}>
        {e.map((col,k)=>{ return (<div className='menupalettecolor' key={k} style={{backgroundColor:col}}></div>)})}
        <div className="deleteopt" onClick={()=>{this.props.onPaletteDelete(key);this.setState({saved:true})}}><DeleteIcon className='deleteicon'/></div>
      </div>)});
    }
    return (
    <div className="bodycontainer">
      <div className="palette">
        <ColorStrip 
        color={this.props.colors[0]} 
        lock={this.props.shuffle[0]} 
        onLock={()=>this.props.onLock(0)}
        onFavColor={this.props.onFavColor}
        added={this.props.addedFav[0]}
        onCopy={this.props.onCopyColor}
        />
        <ColorStrip 
        color={this.props.colors[1]} 
        lock={this.props.shuffle[1]} 
        onLock={()=>this.props.onLock(1)}
        onFavColor={this.props.onFavColor}
        added={this.props.addedFav[1]}
        onCopy={this.props.onCopyColor}
        />
        <ColorStrip 
        color={this.props.colors[2]} 
        lock={this.props.shuffle[2]} 
        onLock={()=>this.props.onLock(2)}
        onFavColor={this.props.onFavColor}
        added={this.props.addedFav[2]}
        onCopy={this.props.onCopyColor}
        />
        <ColorStrip 
        color={this.props.colors[3]} 
        lock={this.props.shuffle[3]} 
        onLock={()=>this.props.onLock(3)}
        onFavColor={this.props.onFavColor}
        added={this.props.addedFav[3]}
        onCopy={this.props.onCopyColor}
        />
        <ColorStrip 
        color={this.props.colors[4]} 
        lock={this.props.shuffle[4]} 
        onLock={()=>this.props.onLock(4)}
        onFavColor={this.props.onFavColor}
        added={this.props.addedFav[4]}
        onCopy={this.props.onCopyColor}
        />
      </div>
      <MenuWrapper vis={this.props.menu}>
        <div className="menutop">
          <span className={favourite} onClick={this.onMenuFavClick}>Favourites</span>
          <span className={saved} onClick={this.onMenuSavedClick}>Saved</span>
        </div>
        <div className="reslist">
        {this.state.favourite?fav:(this.state.saved?sav:null)}
        </div>
      </MenuWrapper>
    </div>
    )
  }
}
