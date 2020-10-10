import React from 'react';

const SortButton = (props) => {
    const {text, callBack, column} = props;

    return (
        <button onClick={(event) => callBack(column)}>{text}</button>
    );
}

export default SortButton;