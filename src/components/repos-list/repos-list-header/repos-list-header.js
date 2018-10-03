import React from 'react';

// component representing repos list table header
const ReposListHeader = (props) => (
    <tr>
        {props.headers.map(header=><th key={header}>{header}</th>)}
    </tr>
)
export default ReposListHeader;