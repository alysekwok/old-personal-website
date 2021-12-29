import React from 'react';
import "./styles.css";
import linkedin from './assets/linkedin-logo.png';
import instagram from "./assets/instagram-logo.png";
import github from "./assets/github-logo.png";
import sketch from "./assets/skyline-sketch.png";
import star from "./assets/star.gif";
import self from "./assets/self.jpeg"

const Home = () => {
    return (
        <div class = "home-page">
            <div class = "home-header">
            <div ><img src = {star} height = "100" alt = "star gif" /></div>
                <div><h1 id = "name-header"> alyse kwok </h1></div>
            <div ><img src = {star} height = "100" alt = "star gif" /></div>
            </div>
            <div>
                <p id = "tagline">
                    computer science student in atlanta, georgia
                </p>
            </div>
            <div class = "logos">
                <a href="https://www.linkedin.com/in/alysekwok/"> <img src = {linkedin} height = "50" alt = "linkedin link" /></a>
                <a href="https://www.instagram.com/alysekwok/"><img src = {instagram} height = "50" alt = "instagram link" /></a>
                <a href="https://github.com/alysekwok/"><img src = {github} height = "50" alt = "github link" /></a>
            </div>
            <div id = "drawing-image">
            <img src = {sketch}  height = "500" width = "700" alt = "github link" /> 
            </div>

            <div class = "introduction">
                <h2 id = "intro-header">a little more about me...</h2>
                <div class = "intro-body">
                    <div>
                    <p class = "intro-paragraph">
                    Nice to meet you! My name is Alyse Kwok and I am an aspiring software engineer. 
                    I'm always looking to learn about new technologies and how they work. Recently, I've been
                    trying to enhance my knowledge in developing full stack web applications. 
                     </p>
                     <p class = "intro-paragraph">
                     Currently, I am in my second year studying computer science at Georgia Tech in
                    Atlanta, Georgia.  
                     </p>
                    </div>
                    <div>
                    <img src = {self}  height = "300"  alt = "me lol" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home;