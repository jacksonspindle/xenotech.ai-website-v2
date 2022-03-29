import React from 'react'
import "../App.css"


export default function NavBar(){
    return (
        <div >
            <nav className='navBar' >
                <img src='./xenotech_icon.png' className='xenotechIcon'></img>
                <ul className='navList'>
                    <li>Store</li>
                    <li>Blog</li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
    )
}

