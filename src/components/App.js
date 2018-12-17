import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logo.svg';
import './App.css';
import { simpleAction,complexAction } from '../actions/simpleAction' 
const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    complexAction: () => dispatch(complexAction())
})


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
    }
    simpleAction = (event) => {
        this.props.simpleAction();
    } 
    complexAction = (event) => {
        this.props.complexAction();
    }
    handleChange = (event) => {
        this.setState ({input: event.target.value})
    }
 render() {
    return (
        <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button onClick={this.simpleAction}>Test simple redux action</button>
                <button onClick={this.complexAction}>Test complex redux action</button> 
                <pre>
                {
                    JSON.stringify(this.props)
                }
                </pre>
                <input type="text" onChange={this.handleChange.bind(this)} value={this.state.input}/>
                <p>{this.state.input}</p>
        </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);