import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

const Title = ({className,children}) =>{
    return(
        <span className={`simple-title ${className}`}>{children}</span>
    );  
}

Title.defaultProps = {
    className : 'simple-title--default'
}
Title.propTypes = {
    className : PropTypes.string,
    children : PropTypes.string
}

export default Title;