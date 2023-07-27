import {Outlet} from "react-router-dom";
import {Header} from "../Header/Header";

export const AppMainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};