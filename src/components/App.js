import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Input from './input';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../locale/translate.json";
import { Translate } from "react-localize-redux";
import LanguageToggle from './locale';

class App extends Component {
    constructor(props) {
    super(props);
     this.state = {
         lang: "English"
     }
     this.props.initialize({
         languages: [
             { name: "English", code: "en" },
             { name: "Chinese", code: "zh-cn" },
             { name: "Spanish", code: "es" }
         ],
        translation: globalTranslations,
        options: { renderToStaticMarkup }
    });
    //this.LanguageToggle = this.LanguageToggle.bind(this);
    this.selectedLang = this.selectedLang.bind(this);
}

    selectedLang(e) {
        //console.log()
        this.setState({lang:e.target.value});
    }
 render() {
    return (
        <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Input/>
                {/* <select onChange={this.selectedLang} value={this.state.lang}>
                    <option value="English">English</option>
                    <option value="Chinese">Chinese</option>
                </select> */}
                <LanguageToggle/>
                {/* <ul className="selector">
                    {this.state.languages.map(lang => 
                        <li key={ lang.code }>
                        <button className={this.getClass(lang.code)} onClick={() => this.setActiveLanguage(lang.code)}>{ lang.name }</button>        
                        </li>
                    )}
                </ul> */}

                {/* <p>You have selected : {this.state.lang}</p> */}
                <h1>
                    <Translate id="welcome.greeting"/>
                </h1>
                {/* <LanguageToggle/> */}
        </div>
        );
    }
}

export default withLocalize(App);