import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavBarContainer = styled(Navbar)`
  background: linear-gradient(to left, #00c3e1, #584995);
  padding: 20px 0;
  z-index: 10000;

  & .navbar-brand {
    margin-right: 30px;
  }

  & .nav-link {
    font-family: Montserrat;
    font-size: 12.5px;
    font-weight: 600;
    line-height: 1.2;
    min-width: 95px;
    text-align: center;
    margin-right: 7px;
  }

  & .navbar-nav {
    align-items: center;
  }

  &.navbar-secondary {
    background: transparent;
    position: absolute;
    width: 100%;
  }

  @media only screen and (max-width: 576px) {
    &.navbar-secondary {
      background: #fff;
      position: relative;
    }
  }

  @media only screen and (max-width: 991px) {
    & .navbar-collapse {
      position: absolute;
      top: 50px;
      right: 0;
      background-color: #fff;
      z-index: 1;
      padding: 10px 20px;
      border: 1px solid rgba(0,0,0,.15);
      border-radius: .25rem;
    }

    & .navbar-nav {
      align-items: flex-start;
    }

    &.navbar-dark .navbar-nav .nav-link {
      color: #000;
    }

    & .nav-link:not(.dropdown-toggle) {
      width: 100%;
      text-align: left;
      margin-right: 0;
      padding: .5rem 1rem;

      &:hover {
        color: #1e2125;
        background-color: #e9ecef;
      }
      &.active, &:active {
        color: #fff;
        text-decoration: none;
        background-color: #0d6efd;
      }
    }

    & .MuiAvatar-root {
      margin-right: 10px;
    }

    & .navbar-nav .dropdown-menu {
      position: absolute;
      left: -45px;
      margin-top: 12px;
    }
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  width: 120px;
`;

export const Icon = styled.img`
  object-fit: contain;
  width: 15px;
  margin-right: 7px;

  @media only screen and (max-width: 991px) {
    &.md-hide {
      display: none;
    }
  }

  @media only screen and (min-width: 992px) {
    &.lg-hide {
      display: none;
    }
  }
`;

export const NavbarUser = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15.5px;
  padding: 6.5px 10.4px 6px 10.5px;
  border-radius: 5px;
  background-color: rgb(0 0 0 / 5%);

  @media only screen and (max-width: 991px) {
    & {
      margin: 10px 0;
    }
  }
`;

export const NavbarLinksDiv = styled.div`
  position: relative;
  flex: 1;

  @media only screen and (max-width: 991px) {
    & {
      flex: unset;
    }
  }
`;

export const NavbarLanguage = styled.div`
  margin-left: 16.8px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;

  .navbar-nav & .nav-link {
    padding: 9px 16px;
    min-width: unset;
    margin-right: 0;
    font-size: 12px;
    line-height: 1.08;
    letter-spacing: -0.29px;
  }
`;