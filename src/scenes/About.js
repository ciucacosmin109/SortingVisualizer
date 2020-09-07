import React, { Component } from 'react';

import './About.css';
 
export class About extends Component{
    static displayName = About.name;
 
    render(){
        return ( <div className="about">
            <div className="card">
                <div className="card-header">
                    <h6>About</h6>
                </div>

                <div className="card-body"> 
                    <p>This is a web application used to visualize different sorting algorithm on a random set of data represented by vertical bars.</p>
                    <p>I made this project to learn front-end web development with javascript+react and to recap/learn different sorting algorithms.</p>
                    <p>It is built with Javascript, React.JS and it's also a <a href="https://developers.google.com/web/progressive-web-apps">progressive web application</a>.</p>
                    <p>You can access a deployed version at <a href="https://ciucacosmin109.github.io/SortingVisualizer">Github pages</a>.</p>
                       
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h6>Download a local version</h6>
                </div>

                <div className="card-body">   
                    <p>Clone the repository:</p>
                    <code>&gt; git clone https://github.com/ciucacosmin109/SortingVisualizer.git</code><br/>
                    <code>&gt; cd SortingVisualizer</code><br/><br/>
                    
                    <p>Install the dependencies:</p>
                    <code>&gt; npm install</code><br/><br/>

                    <p>Runs the app in the development mode:</p>
                    <code>&gt; npm start</code><br/><br/>

                    <p>The default web browser should open automatically and redirect you to <a href="http://localhost:3000">http://localhost:3000</a></p>

                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h6>License</h6>
                </div>

                <div className="card-body">    
                    <p><a href="https://github.com/ciucacosmin109/SortingVisualizer/blob/master/LICENSE">GPL v3</a></p>

                </div>
            </div>
        </div>);
    }
}