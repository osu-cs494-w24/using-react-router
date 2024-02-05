import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
    Home,
    About,
    People,
    Menu,
    Root,
    MenuItem,
    Specials,
    ErrorPage
 } from './Routes'

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Root><ErrorPage /></Root>,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "people", element: <People /> },
            {
                path: "menu",
                element: <Menu />,
                children: [
                    { path: ":menuItem", element: <MenuItem /> },
                    { index: true, element: <Specials /> }
                ]
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
