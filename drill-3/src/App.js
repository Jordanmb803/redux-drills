import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import {addGuest, removeGuest} from './ducks/guestList';

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }

  }


  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button type="" className="" onClick={()=>this.props.removeGuest(i)}>Remove</button>
              </div>
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest: <input type="" className="" onChange={e=>this.setState({input: e.target.value})} />
          <button type="" className="" onClick={()=>this.props.addGuest(this.state.input)}>Add</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  };
}

let actions = {
  removeGuest,
  addGuest
}

export default connect(mapStateToProps, actions)(App);
