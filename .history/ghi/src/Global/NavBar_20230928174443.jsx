import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useGetAccountQuery, useLoginMutation, useLogoutMutation } from '../app/apiSlice'

const NavBar = () => {
    const { data: account, isLoading } = useGetAccountQuery()
    const [logout] = useLogoutMutation()
    const navigate = useNavigate()



}

export default NavBar