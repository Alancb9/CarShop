import React from 'react'

const LabelFormCheck = ({ className, tipo, text }) => {
    return (
        <label className={className} htmlFor={tipo}>{text}</label>
    );

};

export default LabelFormCheck;