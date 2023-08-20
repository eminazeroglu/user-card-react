import { useRoutes } from "react-router-dom";
import routes from "../routers/routes";
import TokenProvider from "./TokenProvider";

function GlobalProvider() {
    const RouterComponent = () => useRoutes(routes);

    return (
        <div className="main-page">
            <TokenProvider>
                <RouterComponent/>
            </TokenProvider>
        </div>
    );
}

export default GlobalProvider;