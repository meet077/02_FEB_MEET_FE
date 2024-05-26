import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './modules/Home';

const AdminDashboard = lazy(() => import('./modules/Admin/AdminDashboard'));
const AdminSettings = lazy(() => import('./modules/Admin/AdminSettings'));
const UserDashboard = lazy(() => import('./modules/User/UserDashboard'));
const UserProfile = lazy(() => import('./modules/User/UserProfile'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="admin" element={<AdminDashboard />}>
                        <Route path="settings" element={<AdminSettings />} />
                    </Route>
                    <Route path="user" element={<UserDashboard />}>
                        <Route path="profile" element={<UserProfile />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
