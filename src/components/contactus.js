import React, { Component } from 'react'

export default class Contactus extends Component {
    render() {
        return (
            <div>
                <h1> Contact me</h1>
                <p> I am open to work opportunities. Connect through <a href="https://www.linkedin.com/in/aidarous-albadawi-515a20159/"><b>LinkedIn</b></a>, <a href="https://github.com/aidarous"><b>GitHub</b></a>,or Email: <a href="mailto: aidarous12@gmail.com"><b>aidarous12@gmail.com</b></a></p>
                <div className="row banner">
                    <ul className="social">
              
                    <li><a href="https://www.linkedin.com/in/aidarous-albadawi-515a20159/" className="fa fa-linkedin" target="_blank"></a></li>
                    <li><a href="https://github.com/aidarous"><i className="fa fa-github" /></a></li>
                    <li><a href="mailto: aidarous12@gmail.com" className=" fa fa-envelope" ></a></li>
              
                    </ul>
                </div>
            </div>
            
        )
    }
}
