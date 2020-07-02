import React from "react";
import { render } from "react-dom";
import './Home.scss';
import Button from '../../components/Button';
import Sidebar from '../../modules/Sidebar';

class Home extends React.Component {
    render() {
        return (
        <div className="home">
            <Sidebar />
            <div className="page-content">
                <div className="page-content__wrapper">
                    <div className="anotations">
                        <div className="anotations__wrapper">
                            <div className="anotations__header">
                                <span>Agregar Bookmarks</span>
                                <i className>Heloo</i>
                            </div>
                        </div>
                    </div>
                    <div className="videoplayer">

                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;
