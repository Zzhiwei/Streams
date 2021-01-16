import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
//61743781817-9jvvg9b5h8l6b3amb8jtql1ne38mb5n0.apps.googleusercontent.com

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
            
        </div>
    );
}

export default Header;