import React from 'react';
import './App.css';
import 'tachyons';
import SearchBox from '../components/SearchBox';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
    console.log('constructor');
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users })
      )

    console.log('Did Mount');


  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });

    console.log(event.target.value);
  }

  render() {
    console.log('Render');

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.robots.length === 0) {
      return <div ClassName='tc'><h1 >Loading</h1></div>
    }
    else {
      return (
        <div className='tc'>
          <p><h1>RoboBuddieS</h1></p>

          <SearchBox searchchange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
            <Cardlist robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>

      );

    }
  }

}



export default App;
