import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets"
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { HashLink } from "react-router-hash-link";

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home")
    const {getTotalCartAmount, token ,setToken} = useContext(StoreContext)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

  return (
    <div className="navbar">
        <Link to='/'><h1 className="name">Food-Del</h1></Link>
        <ul className="navbar-menu">
            <HashLink to="/" onClick={() => setMenu("home")} className={menu==="home" ? "active" : ""}>Home</HashLink>
            <HashLink to="/#explore-menu" onClick={() => setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</HashLink>
            <HashLink to="/#app-download" onClick={() => setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile app</HashLink>
            <HashLink to="/#footer" onClick={() => setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>Contact Us</HashLink>
        </ul>
        <div className="navbar-right">
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} /></Link>
                <div className={getTotalCartAmount() ? "dot" : ""}></div>
            </div>
            {!token 
                ? <button onClick={()=> setShowLogin(true)}>Sign In</button>
                : <div className="navbar-profile">
                    <img src={assets.profile_icon} alt="" />
                    <ul className="navbar-profile-dropdown">
                        <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                        <hr/>
                        <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    </ul>
                </div>
            }
            
        </div>
    </div>
  )
}

export default Navbar