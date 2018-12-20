/*
 * 
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Input extends Component {
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
        <div className="Input"> 
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
export default connect(mapStateToProps, mapDispatchToProps)(Input);