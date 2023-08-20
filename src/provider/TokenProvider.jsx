import { Navigate, useLocation } from "react-router-dom";

function TokenProvider({children}) {
    const token = localStorage.getItem('token');
    const {pathname} = useLocation();

    if (!token && pathname !== '/login') {
        return <Navigate to={'/login'}/>
    }
    else if (token && pathname === '/login') {
        return <Navigate to={'/'}/>
    }

    return children;
}

export default TokenProvider;