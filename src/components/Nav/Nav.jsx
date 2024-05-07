import './Nav.module.css'
import cl from './Nav.module.css';

import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    const [showMain, setShowMain] = useState(false);
    const [stateRoute, setStateRoute] = useState([
        {path: "/blog", active: false, name: 'blog'},
        {path: "/projects", active: false, name: 'projects'},
    ])

    // Set status active links by route
    const setActive = () => {
        const currentStateRoute = []

        stateRoute.map(item => {
            if(location.pathname === item.path) {
                item.active = true;
            }
            currentStateRoute.push(item)
        })

        setStateRoute(currentStateRoute);
    }

    useEffect(() => {
        if(location.pathname !== '/') setShowMain(true);
        setActive();
    }, []);

    return (
        <nav>
            {/*Link on Main page*/}
            { showMain && <Link className='link' to='/'>main</Link> }

            {/* Show links */}
            { stateRoute.map(item =>
                <Link key={item.name}
                      className={item.active ? 'link ' + cl.active : 'link'}
                      to={item.path}>
                    {item.name}
                </Link>)
            }
        </nav>
    );
};

export default Nav;