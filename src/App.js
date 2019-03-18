import React, { Component } from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import NavBar from './components/NavBar';
import TemperatureView from './components/TemperatureViewer';
import Axios from 'axios'
import Moment from 'moment-timezone';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleTempNow: "",
      tempNow: 0,
      updatedTempNow: ""
    }
  }

  componentDidMount(){
    this.callApi("latest");
  }

  callApi(endpoint) {
    Axios.get('URL/' + endpoint)
    .then(response => {
      this.setState({
        titleTempNow: "Latest Temperature", 
        tempNow: response.data[0].temperature,
        updatedTempNow: Moment(new Date(response.data[0].date_time)).utcOffset("+1").format("YYYY-MM-DD HH:mm:ss")
      });
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <div style={{marginTop: 2 + 'em'}}>
          <Grid container spacing={16} justify="center" alignItems="flex-start">
            <Grid item md={3}>
              <TemperatureView title={this.state.titleTempNow} temperature={this.state.tempNow} updated={this.state.updatedTempNow} />
            </Grid>
            <Grid item md={3}>
              <TemperatureView title={this.state.title} temperature={this.state.tempNow} updated={this.state.updated} />
            </Grid>
            <Grid item md={3}>
              <TemperatureView title={this.state.title} temperature={this.state.tempNow} updated={this.state.updated} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;