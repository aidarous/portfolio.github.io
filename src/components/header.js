import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header id="home">
                    
                  <div className="row banner">
                    <div className="banner-text">
                      <h1 className="responsive-headline">I'm Aidarous Albadawi.</h1>
                      <h3>I'm a New York based <span>full stack developer</span>,  creating awesome websites. Let's start scrolling
                        and learn more about me.</h3>
                      <hr />
                      <ul className="social">
                  
                  
                      <li><a href="https://www.linkedin.com/in/aidarous-albadawi-515a20159/"><i className="fa fa-linkedin" target="_blank"/></a></li>
                      <li><a href="https://github.com/aidarous"><i className="fa fa-github" /></a></li>
                  
                      </ul>
                    </div>
                  </div>
            
                </header>
            </div>
        )
    }
}
