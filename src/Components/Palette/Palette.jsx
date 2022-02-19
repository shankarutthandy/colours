import React, { Component } from 'react'
import './Palette.css'
import ColorStrip from '../ColorStrip/ColorStrip'
export default class Palette extends Component {
  render() {
    return (
    <div className="bodycontainer">
      <div className="palette">
        <ColorStrip color={this.props.colors[0]} 
        lock={this.props.shuffle[0]} 
        onLock={()=>this.props.onLock(0)}
        />
        <ColorStrip color={this.props.colors[1]} 
        lock={this.props.shuffle[1]} 
        onLock={()=>this.props.onLock(1)}
        />
        <ColorStrip 
        color={this.props.colors[2]} 
        lock={this.props.shuffle[2]} 
        onLock={()=>this.props.onLock(2)}
        />
        <ColorStrip 
        color={this.props.colors[3]} 
        lock={this.props.shuffle[3]} 
        onLock={()=>this.props.onLock(3)}
        />
        <ColorStrip 
        color={this.props.colors[4]} 
        lock={this.props.shuffle[4]} 
        onLock={()=>this.props.onLock(4)}
        />
      </div>
      <div className="menubar"></div>
    </div>
    )
  }
}
