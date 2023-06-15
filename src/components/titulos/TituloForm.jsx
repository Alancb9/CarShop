import React from 'react'

const TituloForm = ({ className, text }) => {
    return(
        <h2 className={className}>
            {text}
        </h2>
    );
};

export default TituloForm;