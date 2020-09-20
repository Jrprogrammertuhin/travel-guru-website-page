import React, { useContext } from 'react';
import navigator from '../Navigation/Navigation.css'
import { Link } from 'react-router-dom';
import image from '../image/Logo.png'
import d from '../image/Image/Rectangle 1.png'
import PhCarousel from '../Carsousel/PhCarousel';
import { UserContext } from '../../App';
const Navigation = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="containerA">
            <div className="headerH">
                <div className="logo">
                    <img src={image} alt="" />
                </div>
                <nav >
                    <input type="search" name="" id="" placeholder="search your destination" />
                    <Link to="/news">News</Link>
                    <Link to="/destination">Destination</Link>
                    {/* <Link to="/blog">Blog</Link> */}
                    <Link to="/contact">Contact</Link>
                    <Link to="/hotel">Hotel</Link>
                    <Link to="/login">Login </Link>
                    <Link className="signOut" onClick={() => setLoggedInUser({})}>Log Out</Link>
                    {/* <button >Login</button> */}
                </nav>
            </div>
        </div>
    );
};

export default Navigation;