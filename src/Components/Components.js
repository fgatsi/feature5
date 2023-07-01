import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthModule from './Auth/Auth';
import AuthLogin from './Auth/AuthLogin';
import Course from '../Common/Course';
import Grade from '../Common/Grade';
import Main from '../Common/Main';
import PrivateRoutes from "../PrivateRoutes";
import AuthRegister from "./Auth/AuthRegister";
const Components = () => {
    return (
        <Router>
            <Routes>
            <Route path="/auth" element={<AuthModule />} />
            <Route path="/login" element={<AuthLogin />} />
            <Route path="/register" element={<AuthRegister />} />
            <Route element={<PrivateRoutes />}>
                <Route path="/course" element={<Course />} exact />
                <Route path="/grade" element={<Grade />} />
                <Route path="/main" element={<Main />} />
            </Route>
            <Route path="*" element={<AuthModule />} />
            </Routes>
        </Router>
    );
};

export default Components;