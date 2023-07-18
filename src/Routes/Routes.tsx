import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../components/Home/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Login/Register';
import  Book  from '../components/Book/Book';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/books',
                element: <Book />,
                loader: () => fetch('data.json').then((response) => response.json()), // Load data from data.json
              },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default router;