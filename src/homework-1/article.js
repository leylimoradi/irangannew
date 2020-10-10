import React from 'react';

const Article = (props) => {
    const {title, text} = props;

    const refindTtitle = title.split("").map((char, i) => {
        if (i === 0 ) {
            return char.toUpperCase();
        }
        else {
            return char.toLowerCase();
        }
    }).join("");

    return (
        <article>
            <h4>{refindTtitle}</h4>
            <p>{text}</p>
        </article>
    );
}

export default Article;