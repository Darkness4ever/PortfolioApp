import React, { Component } from 'react';
import Projects from "./Projects"
import Socials from "./Socials"
import profile from './assets/profile.jpeg'
class App extends Component {

    state = { displayBio: false }
    
    toggleBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }
    render() {
        return (
            <div >
                <img src={profile} alt='profile' className="profile" />
                <h1>Hello</h1>
                <p>My name is Ankit. I am a software Engineer</p>
                <p>I am always looking forward to learn new things</p>
                {this.state.displayBio ? (<div>
                    <p>I live in Hyderabad, India</p>
                    <p>I am learnig React Js</p>
                    <p>My hobbies include playing guitar </p>
                    <button onClick={this.toggleBio}>Show Less</button>
                </div>) :
                    <div>
                        <button onClick={this.toggleBio}>Read More</button>
                    </div>
                }
                <hr />
                <Projects />
                <hr />
                <Socials />
            </div>
        )
    }
}

export default App;