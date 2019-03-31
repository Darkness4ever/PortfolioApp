import React, { Component } from 'react'
import Header from './Header'

const Joke = ({ joke: { setup, punchline } }) => (
     <p style = {{margin:20}}>{setup}<em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, listOfJokes: [] }

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message))
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/jokes/ten')
            .then(response => response.json())
            .then(json => this.setState({ listOfJokes: json }))
            .catch(error => alert(error.message))
    }

    render() {
        return (
            <div>
                <Header />
                <h2>Joke Of the Day</h2>
                <Joke joke={this.state.joke} />
                <button onClick={this.fetchJokes} >List of Jokes </button>
                {this.state.listOfJokes.map(joke => (
                    <Joke key={joke.id} joke={joke} />
                )
                )}
            </div>
        )
    }
}

export default Jokes