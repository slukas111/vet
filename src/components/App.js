import React, { Component } from 'react';
import '../css/App.css';
import AddAppointment from './AddAppointment';
import ListAppointment from './ListAppointment';
import SearchAppointment from './SearchAppointment';


class App extends Component {

  constructor() {
    super()
    this.state = {
      userName: 'default-user',
      userAppointment: []
    };
  }

  componentDidMount() {
    fetch('./data.json')
    .then(response => response.json())
    .then(result =>{
      const apts = result.map(item => {
        return item;
      })
      this.setState({
        userAppointment: apts
    });

    });
  }

  render() {
  return (
<main className="page bg-white" id="petratings">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white">
        <div className="container">
          <div><AddAppointment /></div>
          <div><SearchAppointment /></div>
          <div><ListAppointment appointments={this.state.userAppointment} /></div>
        </div>
      </div>

    </div>
  </div>
</main>
  );
}
}


export default App;
