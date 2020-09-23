import React, { Component } from 'react'

export default class Contactus extends Component {
    render() {
        return (
            <div>
                <h1> Contact me</h1>
                <p> I am open to work opportunities. Connect through <a href="https://www.linkedin.com/in/aidarous-albadawi-515a20159/"><b>LinkedIn</b></a>, <a href="https://github.com/aidarous"><b>GitHub</b></a>,or Email: <a href="mailto: aidarous12@gmail.com"><b>aidarous12@gmail.com</b></a></p>
                
                <div>
                    <div >
                        
                            <ul className="row">
                    
                                
                                    <li className="row-item"><a href="https://www.linkedin.com/in/aidarous-albadawi-515a20159/" className="fa fa-linkedin" target="_blank"></a></li>
                                
                                
                                    <li className="row-item"><a href="https://github.com/aidarous" className="fa fa-github"></a></li>
                                
                                
                                    <li className="row-item"><a href="mailto: aidarous12@gmail.com" className=" fa fa-envelope" ></a></li>
                                    <li>&copy;Copyright 2020 Aidarous Albadawi </li>
                                
                    
                            </ul>
                        
                    </div>
                </div>
            </div>
            
        )
    }
}
