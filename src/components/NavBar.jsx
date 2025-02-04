// src/components/NavBar.jsx
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const getActiveClass = ({ isActive }) => (isActive ? "active" : "");

    return (
        <nav>
            <NavLink to="/markets" className={getActiveClass}>
                Markets
            </NavLink>
            <NavLink to="/trade" className={getActiveClass}>
                Trade
            </NavLink>
            <NavLink to="/orders" className={getActiveClass}>
                Orders
            </NavLink>
            <NavLink to="/funds" className={getActiveClass}>
                Funds
            </NavLink>
            <NavLink to="/support" className={getActiveClass}>
                Support
            </NavLink>
        </nav>
    );
};

export default NavBar;
