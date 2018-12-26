// @flow
import React from 'react';
import { withLocalize } from 'react-localize-redux';

class LanguageToggle extends React.Component {
    constructor(props) {
        super(props) 
            return {
                asd:"asd"
            }
    }
    setLang = (event) => {
        console.log(this.setActiveLanguage)
        console.log(withLocalize)
    }
    render() {
        return (
        //     <select onChange= {setLang}>
        //         {languages.map(lang => 
        //             <option className={getClass(lang.code)} value={ lang.code } key={lang.code}>
        //                 { lang.name }   
        //             </option>
        //         )}
        //     </select>
            <button onClick = {this.setLang}></button>
        );
    };
}

export default withLocalize(LanguageToggle)