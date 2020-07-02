import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';

import SidebarItem from '../../components/SidebarItem';
import Logo from '../../components/Logo';

const Sidebar = ({className})=>{
    const items = ['menu', 'home'];

    return(
        <div className={`sidebar ${className}`}>
            <div className="sidebar__wrapper">

                <div className="sidebar__brand">
                    <Logo />
                </div>
                {
                items.map((t,i)=>{
                    return <SidebarItem children={t}/>
                })
                }
            </div>
        </div>
    );
}

Sidebar.defaultProps = {
    className : 'sidebar--default'
}

Sidebar.propTypes = {
    className : PropTypes.string
}

export default Sidebar;