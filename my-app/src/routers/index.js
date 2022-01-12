import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routers } from "./router";

export default function RoutesCustom() {
    return (
        <BrowserRouter>
            <Routes>
                {routers.map((route) => {
                    const ComponentRender = route.Component;

                    return (
                        <Route key={route.name} exact path={route.path} element={<ComponentRender />} />)
                })}
            </Routes>
        </BrowserRouter>
    );
};
