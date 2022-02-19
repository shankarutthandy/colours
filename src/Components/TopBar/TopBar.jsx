import React from 'react';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import './TopBar.css'
export default function TopBar({onClick}) {
  return (
    <div className="topbar">
        <div className="title">
            <span>colours</span>
        </div>
        <hr className='line'/>
        <div className="navbar">
            <span className='inst'>Press shuffle to generate a random color palette ! </span>
            <div className="icons">
            <div className="pair1 pointer">
            <ShuffleOutlinedIcon className='grow' onClick={onClick}/>
            </div>
            <div className="pair2 pointer">
            <ArrowBackIcon className='grow'/>
            <ArrowForwardIcon className='grow'/>
            </div>
            <div className="pair3 pointer">
            <RemoveRedEyeIcon className='grow'/><span>View</span>
            <ShareIcon className='grow'/><span>Export</span>
            <FavoriteIcon className='grow'/><span>Save</span>
            </div>
            <div className="pair1 pointer"><MenuIcon className='grow'/></div>
            </div>
        </div>
    </div>
  )
}
