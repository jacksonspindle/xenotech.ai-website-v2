import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'


export default function App() {
    return (
        <nav>
            <NavBar />
            <LandingPage />
            <Footer />
        </nav>
    )
}