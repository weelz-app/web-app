import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavBarContainer = styled(Navbar)`
  background: linear-gradient(to left, #00c3e1, #584995);
  padding: 20px 0;
  z-index: 10000;
  position: sticky;
  top: 0;
  left: 0;

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
    display: flex;
    align-items: center;
  }

  &.navbar-dark .navbar-nav .nav-link {
    color: rgb(255 255 255);

    &:hover {
      color: rgb(255 255 255 / 80%);
    }
  }

  & .navbar-nav {
    align-items: center;
  }

  & .navbar-nav .dropdown-menu {
    margin-top: 12px;
    left: -51px;
    width: 162.89px;
    padding: 0;
  }

  &.navbar-secondary {
    background: transparent;
    position: absolute;
    width: 100%;

    & .nav-link {
      justify-content: center;
      font-size: 13.5px;
      font-weight: bold;
    }
  }

  &.navbar-light .navbar-nav .nav-link {
    color: #000;

    &:hover {
      color: rgba(0,0,0,.55);
    }
  }

  &.navbar-dark .navbar-toggler,
  &.navbar-light .navbar-toggler {
    border: none;

    &:focus {
      box-shadow: unset;
    }
  }

  .collapse:not(.show) {
    display: unset;
  }

  .dropdown-item:hover,
  .dropdown-item:active,
  .dropdown-item:focus {
    color: #347bb4;
    background-color: transparent;
  }

  @media only screen and (max-width: 576px) {
    &.navbar-secondary {
      background: #fff;
      position: relative;
    }
  }

  @media only screen and (max-width: 991px) {
    & .navbar-collapse {
      position: fixed;
      top: 83px;
      right: -230px;
      z-index: 1;
      padding: 10px 20px;
      height: 100vh;
      transition: right .3s ease-in-out;
      min-width: 225px;
      background: #2195c4;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &.show {
        right: 0;
      }

      & .navbar-nav:first-of-type {
        order: 2;
      }

      & .navbar-nav:last-of-type {
        order: 1;
      }
    }

    &.navbar-secondary .nav-link {
      justify-content: flex-start;
    }

    & .navbar-nav {
      align-items: flex-start;
    }

    & .nav-link:not(.dropdown-toggle) {
      width: 100%;
      text-align: left;
      margin-right: 0;
      padding: .5rem 1rem;

      &:hover {
        color: rgb(255 255 255 / 80%);
      }
    }

    & .navbar-nav .dropdown-menu {
      position: absolute;
      left: -45px;
      margin-top: 12px;
    }

    .App.ar & .navbar-collapse {
      left: -230px;
      right: unset;
      transition: left .3s ease-in-out;
      top: 92px;

      &.show {
        right: unset;
        left: 0;
      }
    }
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  width: 130px;

  .App.ar & {
    width: 75px;
  }
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
      background-color: unset;
    }
  }
`;

export const NavbarLinksDiv = styled.div`
  position: relative;
  .navbar:not(.navbar-secondary) & {
    flex: 1;
  }

  @media only screen and (max-width: 991px) {
    .navbar:not(.navbar-secondary) & {
      flex: unset;
    }
  }
`;

export const NavbarLanguage = styled.div`
  margin-left: 16.8px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 9px 16px;
  font-size: 12px;
  line-height: 1.08;
  letter-spacing: -0.29px;
  cursor: pointer;

  &:hover span {
    opacity: 0.7;
  }
`;

export const BarsWrapper = styled.div`
  cursor: pointer;
  direction: rtl;

  &:hover .humbergur-bar {
    opacity: 0.7;
  }

  .App.ar & {
    direction: ltr;
  }
`;

export const BarIcon = styled.div`
  width: 32px;
  background-color: #fff;
  height: 4px;
  display: block;
  margin-bottom: 6px;
  border-radius: 4px;

  .navbar-light & {
    background-color: #000;
  }

  &:nth-of-type(2) {
    width: 22px;
  }

  &:last-of-type {
    width: 29px;
    margin-bottom: 0;
  }
`;
