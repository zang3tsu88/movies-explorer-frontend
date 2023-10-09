import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute({ isLoggedIn }) {

  return (
    isLoggedIn
    ? <Outlet />
    : <Navigate to={'/'} replace={true} />
  )
}

export default ProtectedRoute
