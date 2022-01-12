import App from "../App";
import { About } from "../modules/module-about";
import { Jobs } from "../modules/module-jobs";

export const routers = [
    {
        name: "Jobs",
        path: "/jobs",
        Component: Jobs,
    },
    {
        name: "About Me",
        path: "/about",
        Component: About,
    },
    {
        name: "Main",
        path: "/",
        Component:App,
    }
];