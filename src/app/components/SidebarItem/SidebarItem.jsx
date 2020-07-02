import React from 'react';
import PropTypes from 'prop-types';
import './SidebarItem.scss';

const SidebarItem = ({className, handleOnClick, children})=>{
    return (
        <a className={`sidebar-item ${className}`}>
            <i className={children}></i>
        </a>
    );
}

SidebarItem.defaultProps = {
    className : 'sidebar-item--default'
}

SidebarItem.propTypes = {
    className : PropTypes.string,
    handleOnClick : PropTypes.func.isRequired,
    children : PropTypes.string.isRequired
}

export default SidebarItem;