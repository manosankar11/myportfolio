import React from 'react'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Projects/Projects'
import Contact from '../Contact/Contact'
import './body.css'


const Body = () => {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Project />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body
