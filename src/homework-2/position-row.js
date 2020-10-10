import React from 'react';

const PositionRow = (props) => {
    const {position, salary, office, extensionNumber} = props;

    return (
        <tr>
            <td>{position}</td>
            <td>{salary}</td>
            <td>{office}</td>
            <td>{extensionNumber}</td>
        </tr>
    );
}

export default PositionRow;