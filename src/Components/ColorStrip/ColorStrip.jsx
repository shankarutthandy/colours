import React, { Component } from 'react'
import './ColorStrip.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextureIcon from '@mui/icons-material/Texture';
import StarIcon from '@mui/icons-material/Star';
export default class ColorStrip extends Component {
  render() {
    
    var locked=this.props.lock?(<LockIcon className='bigger opt locked pointer' onClick={this.props.onLock}/>):(<LockOpenIcon className='bigger opt op0 pointer' onClick={this.props.onLock}/>)
    var fav=this.props.added?(<StarIcon className='bigger opt op0 yellow' />):(<StarOutlineIcon className='bigger opt op0 pointer' onClick={()=>this.props.onFavColor(this.props.color)}/>);
    return (
        <div className="strip" style={{background:`${this.props.color}`}}>
        <div className="optionsbar">
            <TextureIcon className='bigger opt op0 pointer'/>
            {fav}
            {locked}
        </div>
        <div className="center"><span className="name">{this.props.color}</span></div>
        </div>
    )   
  }
}

