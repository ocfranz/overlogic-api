import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({className, children, handleOnClick})=>{
    return(
        <a className={`button ${className}`} onClick={handleOnClick}>
            {children}
        </a>
    );
}
Button.defaultProps = {
    className : 'button--default',

}

Button.propTypes = {
    className : PropTypes.string,
    children : PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    handleOnClick : PropTypes.func.isRequired
}

export default Button;