import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>prop number is : {this.props.propNumber}</h3>
        <h3>prop number is : {this.props.propString}</h3>
        <h3>prop number is : {this.props.propObject.obj1}</h3>
        <Parent />
      </div>
    );
  }
}

// App.propTypes = {
//   propObject: React.PropTypes.object,
//   propString: React.PropTypes.string,
//   propString: React.PropTypes.number
// }

App.defaultProps = {
  propNumber: 3, 
  propString: "This is prop string",
  propObject: {
    obj1: "I am obj 1",
    obj1: "I am obj 2",
    obj1: "I am obj 3"
  }
}

class Parent extends Component {
  render(){
    return(
      <div>
        <h2>Just some info</h2>
        <Cars msg="cars are cool" model="34765" coolCars={this.props.cars} />
      </div>
    );
  }
}



Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'City', 'Audi']
}

class Cars extends Component {
  render(){
    return(
      <div>
        <h3>I am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <p>{this.props.coolCars.map((item, i) => {
          return " " + item;
        })}</p>
      </div>
    );
  }
}


export default App;
