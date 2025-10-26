import React, { Component } from 'react';

import {
    createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';
import InstallAppList from '../pages/InstallAppList/InstallAppList';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('./allAppData.json'),
                path: "/",
                Component: Home
            },
            {
                path: '/allApps',
                Component: AllApps
            },
            {
                path: '/appInstallList',
                loader: () => fetch('../appData.json'),
                Component: InstallAppList
            },
            {
                path: 'appDetails/:id',
                loader: () => fetch('../appData.json'),
                Component: AppDetails
            },

        ]
    },
]);

