// @flow
import React from 'react';
import { withLocalize } from 'react-localize-redux';
const LanguageToggle = ({languages, activeLanguage, setActiveLanguage}) => {
    const getClass = (languageCode) => {
        return languageCode === activeLanguage.code ? 'active' : ''
    };
    const setLang = (event) => {
        setActiveLanguage(event.target.value)
        //console.log(this)
    }

return (
    // <ul >
    //   {languages.map(lang => 
    //     <li key={ lang.code }>
    //       <button className={getClass(lang.code)} onClick={() => setActiveLanguage(lang.code)}>{ lang.name }</button>        
    //     </li>
    //   )}
    // </ul>
    <select onChange= {setLang}>
        {languages.map(lang => 
            <option className={getClass(lang.code)} value={ lang.code } key={lang.code}>
                { lang.name }   
            </option>
        )}
    </select>
    

  );
};

export default withLocalize(LanguageToggle);