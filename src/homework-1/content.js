import React from 'react';
import Article from './article';

const Content = (props) => {
    const {category, list, userLangInput} = props;

	const articlesDOM = list.map(({language, title, text}, i) => {
        if (userLangInput === language) {
            return <Article title={title} text={text} key={i} />
        }
    });
    
    return (
        <section>
            <h3>{category}</h3>
            {articlesDOM}
        </section>
    );
}

export default Content;