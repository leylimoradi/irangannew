import React from 'react';

const Languages = (props) => {
    const {availableLang, callback} = props;

    const languages = availableLang.map((language, i) => {
        return <button className="languages" onClick={(event) => callback(language)} key={i}>{language}</button>
    });

    return (
        <aside>
            {languages}
        </aside>
    );
}

export default Languages;