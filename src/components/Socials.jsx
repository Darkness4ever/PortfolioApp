import React from "react"
import SOCIALS from '../data/social'

const Social = props => {

    const { link, image } = props.social
    return (
        <div style={{ display: 'inline-block', margin: 10 }}>
            <a href={link}>
                <img src={image} alt='profile' style={{ height: 42, width: 42 }} />

            </a>
        </div>
    )

}

const Socials = () => (
    <div>
        <h2>Connect with me !!</h2>
        <div>
            {SOCIALS.map(SOCIAL => (
                <Social key={Social.id} social={SOCIAL} />
            )
            )}
        </div>
    </div>
)

export default Socials