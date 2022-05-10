import About from "./pages/About"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import BookPage from "./pages/BookPage"
import Books from "./pages/Books"
import Boxes from "./pages/Boxes"
import Contacts from "./pages/Contacts"
import { ABOUT_ROUTE, ADMIN_ROUTE, BOOKPAGE_ROUTE, BOOKS_ROUTE, BOXES_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE  } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: BOOKS_ROUTE,
        Component: Books
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BOXES_ROUTE,
        Component: Boxes
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: BOOKPAGE_ROUTE + '/:id',
        Component: BookPage
    }
]
