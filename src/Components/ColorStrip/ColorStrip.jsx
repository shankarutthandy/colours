import React, { Component } from 'react'
import './ColorStrip.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextureIcon from '@mui/icons-material/Texture';
export default class ColorStrip extends Component {
  render() {
    var subs;
    if(this.props.lock)
        subs=(<LockIcon className='bigger opt locked' onClick={this.props.onLock}/>)
    else
        subs=(<LockOpenIcon className='bigger opt op0' onClick={this.props.onLock}/>)
    return (
        <div className="strip" style={{background:`${this.props.color}`}}>
        <div className="optionsbar">
            <TextureIcon className='bigger opt op0'/>
            <StarOutlineIcon className='bigger opt op0'/>
            {subs}
        </div>
        <div className="center"><span className="name">{this.props.color}</span></div>
        </div>
    )   
  }
}

