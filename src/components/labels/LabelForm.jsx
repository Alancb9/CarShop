import React from 'react';

const LabelForm = ({tipo, text}) => {
    return(
        <label htmlFor={tipo}>{text}</label>
    );

};

export default LabelForm;