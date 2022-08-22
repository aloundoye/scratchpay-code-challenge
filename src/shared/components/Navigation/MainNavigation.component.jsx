import { Link } from 'react-router-dom';
import { useState } from 'react';

import MainHeader from './MainHeader.component';
import NavLinks from './NavLinks.component';
import SideDrawer from './SideDrawer.component';
import Backdrop from '../UIElements/Backdrop.component';

import './MainNavigation.styles.css';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavLinks className="main-navigation__drawer-nav" />
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">
            <img alt="logo" src={process.env.PUBLIC_URL + '/Brand-logo-Scratch-Horz-RGB@2x.png'}/>
          </Link>
        </h1>
        <NavLinks className="main-navigation__header-nav" />
      </MainHeader>
    </>
  );
};

export default MainNavigation;
