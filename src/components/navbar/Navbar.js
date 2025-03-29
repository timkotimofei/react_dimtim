import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";
import logo from "./../../img/icons/logo.svg"



const Navbar = () => {


    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';


    return ( <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                   
                    <img src={logo} alt="DimTim logo" className="header__logo" />
                        <NavLink to="/" className="logo">
                            <strong>DimTim </strong> LLC
                        </NavLink>
                        
                        <BtnDarkMode />


                                <ul className="nav-list">
                                    <li className="nav-list__item">
                                        <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}> 
                                            Home
                                        </NavLink>
                                        
                                    </li>
                                    <li className="nav-list__item">
                                        <NavLink to="/services" className={({isActive}) => isActive ? activeLink : normalLink}> 
                                            Services
                                        </NavLink>
                                        
                                    </li>
                                    <li className="nav-list__item">
                                        <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}> 
                                            Projects 
                                        </NavLink>
                                    </li>
                                    <li className="nav-list__item">
                                        <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}> 
                                            Contacts 
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                    </div>
            </nav> );
}
 
export default Navbar;