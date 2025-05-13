import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./hook/useAuth";

const ProtectedRoute = ({ allowedRoutes }) => {
    const { isAuthenticated, user, loading } = useAuth();

    if (loading) {
        return (
            <div className={'w-full h-screen flex justify-center items-center'}>
                <div className={'text-red-200 font-bold text-4xl'}>Loading...</div>
            </div>
        );
    }
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    
    if (allowedRoutes && !allowedRoutes.includes(user.role)) {
        return <Navigate to="/unauthorized" />;
    }
    
    return <Outlet />;
};

export default ProtectedRoute;