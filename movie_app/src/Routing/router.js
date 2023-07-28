import {createBrowserRouter} from "react-router-dom";
import {AppMainLayout} from "../AppMainLayout/AppMainLayout";
import {AppRoutes} from "./AppRoutes";
import MoviesListCards from "../Components/MoviesListCards/MoviesListCards";

export const router = createBrowserRouter([
    {
        element: <AppMainLayout/>,
        errorElement: <h2>The resource you requested could not be found.</h2>,
        children: [
            {
                path: AppRoutes.Movie,
                element: <MoviesListCards/>
            },
            {
                path: AppRoutes.Music,
                element: <h1>The music page isn't implemented yet</h1>,
            }
        ]
    }
]);