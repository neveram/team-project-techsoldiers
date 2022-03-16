import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import SuspenseSpinner from "../components/SuspenseFallback";

const Home = lazy(() => import('../Pages/Home'));
const Admin = lazy(() => import('../Pages/Admin'))
const Login = lazy(() => import('../Pages/Auth/Login'))
const Hotel = lazy(() => import('../Pages/Hotel'))
const Listing = lazy(() => import('../Pages/Listing'))
/**
 * @component Path 
 * @description Path is component which is the central routes of the whole application. 
 * 
 * @returns Fragment and Suspense
 */
export const Path = () => {

  /**
   * Element component takes same props as what Route takes in react-router-dom
   * in element: pass lazy elements for code splitting for code to load async.
   */
  const element = [
    { path: "/", element: <Home />, index: true },
    { path: "/login", element: <Login />},
    { path: "/admin", element: <Admin /> },
    { path: "/listing", element: <Listing />},
    { path: "/hotel", element: <Hotel />},
    { path: "*", element: <h1>Not Found!</h1> }
]

  const routes = useRoutes(element);

  return(
    <React.Fragment>
      <Suspense fallback={<SuspenseSpinner />}>
      {routes}
      </Suspense>
    </React.Fragment>
  )
}