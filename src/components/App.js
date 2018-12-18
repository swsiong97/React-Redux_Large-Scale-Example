import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logo.svg';
import './App.css';
import { simpleAction,complexAction,renderText } from '../actions/simpleAction' 
const mapStateToProps = (state) => {
    //console.log(state.textReducer)
    return {
        input: state.textReducer,
        simple: state.simpleReducer,
        complex: state.complexReducer
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        simpleAction: () => dispatch(simpleAction()),
        complexAction: () => dispatch(complexAction()),
        renderText: (text) => dispatch(renderText(text))
    }
    
}


class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
    } 
    complexAction = (event) => {
        this.props.complexAction();
    }
    handleChange = (event) => {
        this.props.renderText(event.target.value);
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
                {/* <input type="text" onChange={this.handleChange.bind(this)} value={this.state.input}/> */}
                <input type="text" onChange = {this.handleChange.bind(this)}/>
                <p>{this.props.input}</p>
        </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);