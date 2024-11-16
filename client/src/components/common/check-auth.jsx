import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {

    const location = useLocation();

    // if user is not authenticated and tries to access the admin related or shopping related pages then user should be redirected to login
    if (!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        return <Navigate to='/auth/login'/>
    }

    // if the user is authenticated & if they try to go to login or register page then they should be redirected to shopping page or admin page
    if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        if (user?.role === 'admin') {
            return <Navigate to='/admin/dashboard' />
        } else {
            return <Navigate to='/shop/home' />
        }
    }

    // if user is authenticated, being a normal user tries to acccess admin page then they should be redirected to unauth page
    if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
        return <Navigate to='/unauth-page' />
    }

    // if user is authenticated & being an admin user tries to access shopping page then redirect the user to admin dashboard
    if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')) {
        return <Navigate to='/admin/dashboard' />
    }

    return <> {children} </>
}

export default CheckAuth;