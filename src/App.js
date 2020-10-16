import React, { Component } from 'react';
import NavBar from './components/layout/Navbar'
import './App.css';
import Users from './components/users/Users';
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  // componentDidMount(){
  //   axios.get('https://api.github.com/users')
  //   .then(res => {
  //     console.log(res.data)
  //   })
  // }

  async componentDidMount(){
    this.setState({ loading: true })
    const res = await axios.get('https://api.github.com/users')
    this.setState({ loading: false, users: res.data})
  }

  render(){
    return (
      <div>
        <nav className="navbar bg-primary">
          <NavBar />
        </nav>
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  } 
}

export default App;
