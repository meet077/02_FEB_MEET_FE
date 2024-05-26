import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <Link to="/admin">Admin Dashboard</Link>
                <Link to="/user">User Dashboard</Link>
            </nav>
        </div>
    );
};

export default Home;
