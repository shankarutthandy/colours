import React from 'react';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import './TopBar.css'
export default function TopBar({onClick,onFavPalette,onMenuClick,saved}) {
  var favclass=saved?'savedicon':'lgtodrk';
  return (
    <div className="topbar">
        <div className="title pointer">
            <span>colours</span>
        </div>
        <hr className='line'/>
        <div className="navbar">
            <span className='inst'>Press shuffle to generate a random color palette ! </span>
            <div className="icons">
            <div className="pair1">
            <ShuffleOutlinedIcon className='lgtodrk pointer' onClick={onClick}/>
            </div>
            <div className="pair2">
            <ArrowBackIcon className='lgtodrk pointer'/>
            <ArrowForwardIcon className='lgtodrk pointer'/>
            </div>
            <div className="pair3">
            <RemoveRedEyeIcon className='lgtodrk pointer'/><span>View</span>
            <ShareIcon className='lgtodrk pointer'/><span>Export</span>
            <FavoriteIcon className={`${favclass} pointer`} onClick={onFavPalette}/><span>Save</span>
            </div>
            <div className="pair1 pointer">
              <MenuIcon className='pointer' onClick={onMenuClick}/>
              </div>
            </div>
        </div>
    </div>
  )
}
