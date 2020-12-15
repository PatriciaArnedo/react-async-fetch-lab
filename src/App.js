// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(r => r.json())
        .then(data => this.setState({peopleInSpace: data.people}))
    }
    
    render(){
        let people = this.state.peopleInSpace.map(person => <h1>{person.name}</h1>)
        console.log(people)    
        return (
            <div>
            {people}
            </div>
            )
    }

}

export default App