import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import SW from "../../assets/images/logo-sw.png";
import { NAVS } from "../../consts/routes";

export function Navbar() {
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState(false);
  return (
    <NavbarStyled>
      <div className="navbar-desktop">
        <div className="logo-container">
          <Link to="/">
            <img alt="" src={SW} height="90" />
          </Link>
        </div>
        <ul>
          {NAVS.map(({ path, label }) => (
            <Link key={path} to={path}>
              <li className={pathname.endsWith(path) ? "active" : ""}>
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="navbar-mobile">
        <div className="nav-button" onClick={() => setShowNav(true)}>
          <FaHamburger />
        </div>
        <div className="logo-container">
          <Link to="/">
            <img alt="" src={SW} height="90" />
          </Link>
        </div>
        {showNav && (
          <>
            <div className="menu-nav-container">
              {NAVS.map((nav) => (
                <Link key={nav.path} to={nav.path}>
                  <div>{nav.label}</div>
                </Link>
              ))}
            </div>
            <div className="backdrop" onClick={() => setShowNav(false)}></div>
          </>
        )}
        <div />
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  .navbar-mobile {
    display: none;
  }
  .navbar-desktop {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    z-index: 100;

    ul {
      display: flex;
      justify-content: center;
      border-top: 1px solid #2a2a2a;
      width: 100%;

      li {
        font-weight: bold;
        text-transform: uppercase;
        transition: 0.5s;
        padding: 10px;
        text-align: center;
        min-width: 120px;
        border-left: 1px solid #2a2a2a;

        &:hover {
          cursor: pointer;
        }

        &.active {
          color: #ffc107;
          border-bottom: 1px solid #ffc107;
        }
      }
      li:last-child {
        border-right: 1px solid #2a2a2a;
      }
    }

    .logo-container {
      text-align: center;
      padding: 16px;
    }
  }

  @media screen and (max-width: 900px) {
    .navbar-desktop {
      display: none;
    }
    .navbar-mobile {
      position: sticky;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: black;
      z-index: 100;
      padding: 10px;

      .nav-button {
        margin: 0 10px;
        cursor: pointer;
        font-size: 1.5em;
      }
      .menu-nav-container {
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: black;
        opacity: 0.8;
        height: 100%;
        width: 200px;
        > a div {
          transition: 0.3s;
          text-transform: uppercase;
          padding: 12px 20px;
          margin: 10px 0;
          cursor: pointer;
          &:hover {
            color: #ffc107;
          }
        }
      }

      .backdrop {
        z-index: 5;
        position: fixed;
        background-color: black;
        opacity: 0.5;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
`;
