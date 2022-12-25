import MainPage from "../pages/MainPage";
import CatalogPage from "../pages/CatalogPage";
import Login from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import BasketPage from "../pages/BasketPage";
import CatalogPage_2 from "../pages/CatalogPage_2";
import OrdersPage from "../pages/OrdersPage";
import ProfilePage from "../pages/ProfilePage"


export const privateRoutes = [
    { path: '/main', component: MainPage, exact: true },
    { path: '/catalog-2', component: CatalogPage, exact: true },
    { path: '/catalog', component: CatalogPage_2, exact: true },
    { path: '/basket', component: BasketPage, exact: true },
    { path: '/myorders', component: OrdersPage, exact: true },
    { path: '/myprofile', component: ProfilePage, exact: true }

]

export const publicRoutes = [
    { path: '/login', component: Login, exact: true },
    { path: '/registration', component: RegistrationPage, exact: true },
]
