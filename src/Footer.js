import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://www.udiscovermusic.com/wp-content/uploads/2020/02/the-weeknd-after-hours-album.jpg" alt=""/>
                <div className="footer__songInfo">
                    <h4>Yeah</h4>
                    <p>User</p>
                </div>
            </div>
            <div className="footer__center">
            <ShuffleIcon className="footer__green"/>
            <SkipPreviousIcon className="footer__icon"/>
            <PlayCircleOutlineIcon className="footer__icon" fontSize="large"/>
            <SkipNextIcon className="footer__icon"/> 
            <RepeatIcon className="footer__green"/>  
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
