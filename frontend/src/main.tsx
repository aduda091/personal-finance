import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LabelsPage from "./pages/LabelsPage.tsx";
import MonthlyTablePage from "./pages/MonthlyTablePage.tsx";
import ChartsPage from "./pages/ChartsPage.tsx";
import { RoutePaths } from "./constants/routes.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: RoutePaths.MONTHLY,
                element: <MonthlyTablePage />,
            },
            // TODO: add table period in url?
            {
                path: RoutePaths.CHARTS,
                element: <ChartsPage />,
            },
            {
                path: RoutePaths.LABELS,
                element: <LabelsPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
