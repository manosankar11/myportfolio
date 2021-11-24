import React from 'react'
import SocialContact from '../common/Social/SocialContact'
import "./About.css"


const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hi,There!
                    <br /> I'm<span className="info-name"> Muruganandham</span>
                    <br /> A frontEnd Developer.
                    <br/><i class="devicon-html5-plain colored"></i>
                    <br/>
                    <SocialContact />
                </div>
                <div className="about-photo">
                    <img className="picture" src={require('../../assets/Developer_About.png').default} />
                </div>
               
            </div>
            <div className="about-bottom">

                </div>

        </div>
    )
}

export default About
