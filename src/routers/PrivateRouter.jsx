import React, { useContext } from 'react'
import { authContext } from '../providers/AuhtProvider'
import {useNavigate} from "react-router-dom"

const PrivateRouter = ({children}) => {
    const {user} = useContext(authContext)

    const navigate = useNavigate()

    if(user) {
        return children
    }

    return navigate('/')
}

export default PrivateRouter