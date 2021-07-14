import React, { useContext } from 'react'
import { Switch, Router, Redirect, Route } from 'react-router-dom'
import { Context } from '..'
import {authRoutes, publickRoutes} from '../routes'
import { SHOP_ROUTE } from '../utils/const'


function AppRouter() {
    const {user} = useContext(Context)
    const isAuth = false
    console.log(user)
    return (
        <Switch>
            {user.isAuth &&
                authRoutes.map(({path, Component}) => 
            <Route path={path} component={Component} exact />
            )}
            {
                publickRoutes.map(({path, Component}) => 
            <Route path={path} component={Component} exact />
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    )
}

export default AppRouter
