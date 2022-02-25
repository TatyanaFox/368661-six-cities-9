import React from 'react';
import {Link} from 'react-router-dom';

type HeaderProps = {
  logoSrc: string,
  logoAlt: string,

  userEmail: string,
  userStatus: boolean,
};

function Header({logoSrc, logoAlt, userEmail, userStatus}: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to='/'>
              <img className="header__logo" src={logoSrc} alt={logoAlt} width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper" />
                  <span className="header__user-name user__name">{userEmail}</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">{userStatus}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
