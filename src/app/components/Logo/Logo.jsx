import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = ({className})=>{
    return(
        <span className={`simple-logo ${className}`}>
            <strong>ZN</strong>
        </span>
    );
}

Logo.defaultProps = {
    className : 'simple-logo--default'
}
Logo.propTypes = {
    className : PropTypes.string
}

export default Logo;