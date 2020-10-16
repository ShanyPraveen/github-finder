import React, { Component } from 'react';
import NavBar from './components/layout/Navbar'
import './App.css';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios'
import PropTypes from 'prop-types'

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

  // async componentDidMount(){
  //   this.setState({ loading: true })
  //   const res = await axios.get(`https://api.github.com/users?client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({  users: res.data, loading: false})
  // }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  }

  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({  users: res.data.items, loading: false})
  }

  render(){
    return (
      <div>
        <nav className="navbar bg-primary">
          <NavBar />
        </nav>
        <div className="container">
          <Search searchUsers={this.searchUsers}/>
        <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  } 
}

export default App;
