import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ReactSession } from 'react-client-session'
ReactSession.setStoreType("localStorage")


function AuthRoute ({children}) {
    ReactSession.setStoreType("localStorage");
    const accessToken =  localStorage.getItem('accessToken')

    if (!accessToken) {
        return <Navigate to="/login"/>
    }
    return children
}

function AuthNotRoute ({children}) {
    ReactSession.setStoreType("localStorage");
    const accessToken =  localStorage.getItem('accessToken')

    if (accessToken) {
        return <Navigate to="/dashboard"/>
    }
    return children
}

export{
    AuthRoute,
    AuthNotRoute
};