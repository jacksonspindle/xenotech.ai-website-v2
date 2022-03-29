import React from 'react'
import "../App.css"
// import "../components/XenotechLogo"




export default function Footer(){
    return (
        <div className='footer'>
            <nav>
                <h1>Menu</h1>
                <ul>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Content</li>
                </ul>
            </nav>
            <nav>
                <h1>Policies</h1>
                <ul>
                    <li>FAQ</li>
                </ul>
            </nav>
            <nav>
            <h1>Contact</h1>
            <ul>
                <li>xenotechfuture@gmail.com</li>
                <div className='miniSocialMediaContainer'>
                    <a href='https://www.cryptovoxels.com/play?coords=W@794E,460N' target={"_blank"}><img src='./cryptovoxelsLogo.png'></img></a>
                    <a href='https://rarible.com/xenotech' target={"_blank"}><img src='./raribleLogo.png'></img></a>
                    <a href='https://twitter.com/prizecard' target={"_blank"}><img src='./twitterLogo.png'></img></a>
                    <a href='https://www.instagram.com/prizecard/' target={"_blank"}><img src='./instagramLogo.png'></img></a>
            </div>
            </ul>
            
            </nav>
    
    </div>
    )
}

