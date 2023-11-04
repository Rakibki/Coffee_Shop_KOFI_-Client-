import React, { useContext } from 'react'
import { authContext } from '../providers/AuhtProvider'
import {Navigate, useLocation, useNavigate} from "react-router-dom"
import Loadding from "../shared/Loadding/Loadding"

const PrivateRouter = ({children}) => {
    const {user, loadding} = useContext(authContext)

    const location = useLocation()

    if(loadding) {
        return  <Loadding />
    }

    if(user) {
        return children
    }

    return <Navigate state={location.pathname} to={"/login"} />
}

export default PrivateRouter