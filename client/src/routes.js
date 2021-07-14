import Admin from './page/Admin'
import Shop from './page/Shop'
import Device from './page/DevicePage'
import Auth from './page/Auth'
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from './utils/const'
export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },
    // {
    //     path:BASKET_ROUTE,
    //     Component:Shop
    // },
]

export const publickRoutes = [
    {
        path:SHOP_ROUTE,
        Component:Shop
    },
    {
        path:REGISTRATION_ROUTE,
        Component:Auth
    },
    {
        path:DEVICE_ROUTE + '/:id',
        Component:Device
    },
    {
        path:LOGIN_ROUTE,
        Component:Auth
    },
]