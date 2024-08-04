import React, { useContext } from 'react';
import { SiPython } from 'react-icons/si';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { FaClosedCaptioning } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header(props) {
    const { context }= props;
    const datacontext= useContext(context);
    const { navbarMobileHandle, closeNavbar }= datacontext;
  return (
    <header className="header fixed-top">
        <nav className="navbar py-3 direction-rtl navbar-expand-lg">
            <div className="container">
            <a href="#" className="navbar-brand d-lg-none">
                    <SiPython className="navbar-brand-icon"/>
                    Code Crafters
            </a>
            <button className="navbar-toggler" id="navbarToggler" onClick={navbarMobileHandle}>
                <AiOutlineMenu className="navbar-toggler-icon"/>
            </button>
                <div className={`navbar-collapse collapse space-aground ${closeNavbar==false?"show":""}`} id="navbarNavs">
                <ul className="navbar-nav">
                <li className="nav-item">
                <a href="#" className="navbar-brand nav-link d-none d-lg-block">
                    <SiPython className="navbar-brand-icon"/>
                    Code Crafters
                </a>
                </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">خانه</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/requestPrinter" className="nav-link">نویسنده شدن</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/requestProject" className="nav-link">درخواست پروژه</Link>
                    </li>
                    <li className="nav-item">
                        <form action="/search">
                        <div className="navbar-searchbox">
                        <input className="navbar-textField-search nav-link" name="q" placeholder="Search" type="search" />
                        <button type="submit" className="navbar-searchbox-btn"><FaSearch /></button>
                        </div>
                        </form>
                    </li>
                    <li className="nav-item my-2 my-lg-0">
                        <Link to="#" className="btn btn-danger nav-link nav-link-join">ثبت نام</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">ورود کاربر</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;
