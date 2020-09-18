import React, { Component } from 'react'
import profilepic from '../assets/profilepic.png'
export default class About extends Component {
    render() {
        return (
            <div>
                <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="img-circle" src={profilepic} />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p> My name is Aidarous, I finished my Bachelor's in Computer Engineering and I'm passionate about building robust and functional websites. I'm always looking to grow and take on new challenges. I have experience creating websites with technologies like HTML5, CSS3, JavaScript, React, Java and Python. My education and knowledge of these technologies complement one another to complete objectives. Contact me for any inquiries or work opportunities.
            </p>
            <div className="row">
              <div className="columns contact-details">
                
              </div>
              
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
            </div>
        )
    }
}
