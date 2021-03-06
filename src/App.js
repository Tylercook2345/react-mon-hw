import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Tyler',
      age: 300,
      people: ['andrew','david','anthony','tyler','tommy','april','christopher','dylan','jamia']
    }
  }

  happyBirthday = () => {
    this.setState(
      {age: this.state.age + 1}
    )
  };

  componentDidMount () {
    // console.log("MAIN APP: I have mounted")
  }
  





  render() {
    // console.log("MAIN APP: I have rendered")
    return (
      <div>
        <Navbar myName={this.state.name} />
        <h1>{this.state['name']} is {this.state.age} years old</h1>
        <button onClick={()=>this.happyBirthday()}>Happy Birthday</button>
        <Routes>
          <Route path='/' element={<Home name = { this.state.name}/>}/>
          <Route path='/about' element={<About myClass={this.state.people}/>}/>         
        </Routes>
      </div>
    )
  }
}

