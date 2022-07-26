import React, {useRef, useEffect } from 'react'
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const headerRef = React.useRef<HTMLDivElement >(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.scrollingElement !== null) {
        if (
          document.scrollingElement.scrollTop >= 100 ||
          document.body.scrollTop >= 100
        ) {
          headerRef.current!!.classList.add("scroller");
        } else {
          headerRef.current!!.classList.remove("scroller");
        }
      }
    });
    // return () => window.removeEventListener("scroll", null);
  }, []);
  return (
    <>
    <header className="page-header">
      <div className="container-fluid">
      <div className="header-wrap" ref={headerRef}>
        <div className="header flex">
        <a className="header-logo" href="/#">
          <img src="https://dsathemes.com/html/olmo_1.4/files/images/logo-01.png" alt="header logo image" className="header-logo-img" />
        </a>
        <nav className="header-nav flex">
          <ul className="header-nav-list flex">
            <li className="header-nav-item"><a href="/#">Home <span className="icon header-icon-down"><FaCaretDown /></span></a></li>
            <li className="header-nav-item"><a href="/#">About <span className="icon header-icon-down"><FaCaretDown /></span></a></li>
            <li className="header-nav-item"><a href="/#">Pages <span className="icon header-icon-down"><FaCaretDown /></span></a></li>
            <li className="header-nav-item"><a href="/#">Auth Pages <span className="icon header-icon-down"><FaCaretDown /></span></a></li>
            <li className="header-nav-item"><a href="/#">Features <span className="icon header-icon-down"></span></a></li>
            <li className="header-nav-item"><a href="/#">Pricing <span className="icon header-icon-down"></span></a></li>
          </ul>
          <a href="" className="btn">Let's Started</a>
        </nav>
        </div>
      </div>
      </div>
    </header>
    </>
  )
}

export default Header