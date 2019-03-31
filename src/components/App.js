import React, { Component } from 'react';
import Projects from "./Projects"
import Socials from "./Socials"
import profile from '../assets/profile.jpeg'
import Title from './Title'
import Jokes from './Jokes'
import Header from './Header'
class App extends Component {

    state = { displayBio: false }

    toggleBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }
    render() {
        return (
            <div >
                <Header />
                <img src={profile} alt='profile' className="profile" />
                <h1>Hello</h1>
                <p>My name is Ankit.</p>
                {/* {this.state.displayBio ? <Title /> : null} */}
                <Title />
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
                <hr />
                <Jokes />
            </div>
        )
    }
}

export default App;