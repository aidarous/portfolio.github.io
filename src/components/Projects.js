import React, { Component } from 'react'
import { BrowserRouter as  Link } from 'react-router-dom'
import basketballrps from '../assets/basketballrps.png'
export default class Projects extends Component {
    render() {
        return (
            <div>
                <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    
                                    <a href="#modal-01" >
                                        
                                        <img alt="" src= {basketballrps} />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">

                                            </div>
                                        </div>
                                        </a>
                                        
                                </div> {/* first project  */}
                                
                            </div>
                        </div>
                    </div>

                </div>
                </section>
            </div>
        )
    }
}
