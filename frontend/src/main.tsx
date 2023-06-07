import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LabelsPage from "./pages/LabelsPage.tsx";
import MonthlyTablePage from "./pages/MonthlyTablePage.tsx";
import ChartsPage from "./pages/ChartsPage.tsx";
import { RoutePaths } from "./constants/routes.ts";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: RoutePaths.MONTHLY,
                element: <MonthlyTablePage />
            },
            {
                path: RoutePaths.CHARTS,
                element: <ChartsPage />
            },
            {
                path: RoutePaths.LABELS,
                element: <LabelsPage />
            }
        ]
    }
]);

const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <RouterProvider router={router} />
        </ApolloProvider>
    </React.StrictMode>
);
