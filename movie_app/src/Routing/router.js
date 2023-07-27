import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h2>Ops, wrong way</h2>,
        children: [
            {
                path: g,
                element: <h1>Welcome</h1>,
            }
        ]
    }
]);