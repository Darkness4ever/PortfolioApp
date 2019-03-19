import React, { Component } from "react"
import SOCIALS from './data/social'

class Social extends Component {
    render() {
        const { link, image } = this.props.social
        console.log(this.props)
        return (
            <div style ={{display:'inline-block' , margin:10}}>
                <a href = {link}>
                <img src={image} alt='profile' style={{ height: 42, width: 42 }} />

                </a>
            </div>
        )
    }
}

class Socials extends Component {
    render() {
        return (
            <div>
                <h2>Connect with me !!</h2>
                <div>
                    {SOCIALS.map(SOCIAL => {
                        return (
                            <Social key={Social.id} social={SOCIAL} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Socials