import React, {useRef, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const headerRef = React.useRef<HTMLDivElement >(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY !== null) {
        if (
          window.scrollY >= 100 
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
        <Link href="/abc">
          <a className="header-logo"><Image src="https://dsathemes.com/html/olmo_1.4/files/images/logo-01.png" alt="header logo image" height={34}  layout="fill" objectFit="contain"/></a>
        </Link>
        <nav className="header-nav flex">
          <ul className="header-nav-list flex">
            <li className="header-nav-item"><Link href="/abc"><a>Home <span className="icon header-icon-down"><FaCaretDown /></span></a></Link></li>
            <li className="header-nav-item"><Link href="/abc"><a>About <span className="icon header-icon-down"><FaCaretDown /></span></a></Link></li>
            <li className="header-nav-item"><Link href="/abc"><a>Pages <span className="icon header-icon-down"><FaCaretDown /></span></a></Link></li>
            <li className="header-nav-item"><Link href="/abc"><a>Auth Pages <span className="icon header-icon-down"><FaCaretDown /></span></a></Link></li>
            <li className="header-nav-item"><Link href="/abc"><a>Features <span className="icon header-icon-down"></span></a></Link></li>
            <li className="header-nav-item"><Link href="/abc"><a>Pricing <span className="icon header-icon-down"></span></a></Link></li>
          </ul>
          <Link href="/abc"><a className="btn">Let's Started</a></Link>
        </nav>
        </div>
      </div>
      </div>
    </header>
    </>
  )
}

export default Header