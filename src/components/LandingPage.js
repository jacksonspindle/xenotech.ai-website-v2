import React from 'react'
import "../App.css"
// import "../components/XenotechLogo"




export default function NavBar(){
    return (
        <div className='landingPage'>
            <div className='landingPageText'>
                <h1>XENOTECH</h1>
                <p>Metaverse Digital Fashion</p>
            </div>
                
            <div className='videosContainer'>
                <div className='landingPageVideos'>
                    <video src='./silverShoe.mp4'  autoPlay loop muted></video>
                    <video src='./clearJacket.mp4' className='landingPageCenterVideo'  autoPlay loop muted></video>
                    <video src='./goldShoe.mp4'  autoPlay loop muted></video>
                </div>
            </div>

            <div>
                <video src='./cryptovoxelsVideo.mp4'   className='cryptovoxelsVideo' autoPlay loop muted  ></video>
            </div>
                

            <div className='xenotechLogo'>
                <a href='https://www.cryptovoxels.com/play?coords=W@794E,460N' target={"_blank"}><img src='./xenotechLogo.png'></img></a>
            </div>
                <div className='metaverseLocationText' >
                <h1 className='metaverseLocationH1' >Metaverse Location</h1>
                <p className='metaverseLocationP'>Visit and shop at the XENOTECH virtual store located in Cryptovoxels</p>
                <button className='jumpInButton'>JUMP IN</button>
                </div>

      </div>
    )
}

