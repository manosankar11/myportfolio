import React from 'react'
import Header from '../Header/Header'
import './Home.css'
import Body from '../body/body'
//import index from "./index.html"
//import Developer from "./Developer.gif"

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Body />
            {/* <img src={require(Developer.gif).default} alt="" /> */}
            {/* <script type='text/javascript'>document.addEventListener('DOMContentLoaded', function () {window.setTimeout(document.querySelector('svg').classList.add('animated'),1000)})</script> */}
        </div>
    )
}

export default Home
