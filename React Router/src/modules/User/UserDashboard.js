import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div>
            <h1>User Dashboard</h1>
            <nav>
                <Link to="profile">Profile</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default UserDashboard;
