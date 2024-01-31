import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home, About, People, Menu, Root, MenuItem } from './Routes'

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "home", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "people", element: <People /> },
            { path: "menu", element: <Menu /> },
            { path: "menu/:menuItem", element: <MenuItem /> }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
