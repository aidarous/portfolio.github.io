import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header id="home">
                    <nav id="nav-wrap">
                      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                      <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                      <li><a className="smoothscroll" href="#about">About</a></li>
                      <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                      <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul> {/* end #nav */}
                  </nav> {/* end #nav-wrap */}
              <div className="row banner">
                <div className="banner-text">
                  <h1 className="responsive-headline">I'm Aidarous Albadawi.</h1>
                  <h3>I'm a New York based <span>full stack developer</span>,  creating awesome . Let's <a className="smoothscroll" href="#about">start scrolling</a>
                   and learn more <a className="smoothscroll" href="#about"> about me</a>.</h3>
            <hr />
            <ul className="social">
              
              
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-github" /></a></li>
              
            </ul>
          </div>
        </div>
        
      </header>
            </div>
        )
    }
}
