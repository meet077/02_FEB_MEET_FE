import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <nav>
                <Link to="settings">Settings</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default AdminDashboard;
