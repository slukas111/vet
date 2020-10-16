import React, { Component } from 'react';
import '../css/App.css';
import AddAppointment from './AddAppointment';
import ListAppointment from './ListAppointment';
import SearchAppointment from './SearchAppointment';

class App extends Component {

  constructor() {
    super()
    this.state ={
      myName: 'sasha'
    }
  }

  render() {
  return (
<main className="page bg-white" id="petratings">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white">
        <div className="container">
          {this.state.myName}
          <div><AddAppointment /></div>
          <div><SearchAppointment /></div>
          <div><ListAppointment /></div>
        </div>
      </div>

    </div>
  </div>
</main>
  );
}
}


export default App;
