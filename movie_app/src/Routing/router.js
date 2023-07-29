import {createBrowserRouter} from "react-router-dom";
import {AppMainLayout} from "../AppMainLayout/AppMainLayout";
import {AppRoutes} from "./AppRoutes";
import MoviesListCards from "../Components/MoviesListCards/MoviesListCards";
import MovieDetails from "../Components/MovieDetails/MovieDetails";

export const router = createBrowserRouter([
    {
        element: <AppMainLayout/>,
        errorElement: <h2>The resource you requested could not be found.</h2>,
        children: [
            {
                path: AppRoutes.Movie,
                element: <MoviesListCards/>,
            },
            {
                path: AppRoutes.Genres,
                element: <h1>The Genres page isn't implemented yet</h1>,
            },
            {
                path: AppRoutes.MovieDetails,
                element: <MovieDetails/>,

            }
        ]
    }
]);