import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logo.svg';
import './App.css';
import { simpleAction } from '../actions/simpleAction' 
const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})

class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
    }
 render() {
    return (
        <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button onClick={this.simpleAction}>Test redux action</button>
                <pre>
                {
                    JSON.stringify(this.props)
                }
                </pre>
        </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);