import Home from "../pages/Home";
import Login from "../pages/Login";
import UserProfile from "../pages/UserProfile";

const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/users/:id',
        element: <UserProfile/>
    },
    {
        path: '/login',
        element: <Login/>
    }
]

export default routes;