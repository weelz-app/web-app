import { Avatar } from "@material-ui/core";
import React from "react";
import { withRouter } from 'react-router-dom';
import { Container, Nav, NavDropdown } from "react-bootstrap";
import {
  Icon,
  Logo,
  NavBarContainer,
  NavbarUser,
  NavbarLinksDiv,
  NavbarLanguage,
  BarsWrapper,
  BarIcon
} from "./NavbarStyle";
import { LinkContainer } from 'react-router-bootstrap';

import LogoIcon from "../../icons/Weelz-English-White.png";
import LogoIconSecondary from "../../icons/en-logo-secondary.png";
import ArLogoIconSecondary from "../../icons/ar_logo_primary.svg";
import ArLogoIcon from "../../icons/ar_logo_white.svg";
import CalenderIcon from "../../icons/calender.svg";
import InformationIcon from "../../icons/information.svg";
import AddNewIcon from "../../icons/AddNew.svg";
import NotificationIcon from "../../icons/notification.svg";

const NavBar = (props) => {
  const path = props.location.pathname;
  const isSecondary = path === "/sign-in" ? true : path === "/email-verification" ? true : false;
  const auth = isSecondary ? false : true;

  const authLinks = (
    <>
      <Nav className="me-auto">
        <LinkContainer to="/trips">
          <Nav.Link>
            <Icon className="md-hide" src={CalenderIcon} />
            Trips
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>
            <Icon className="md-hide" src={InformationIcon} />
            About
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/add-trip">
          <Nav.Link>
            <Icon className="md-hide" src={AddNewIcon} />
            New Trip
          </Nav.Link>
        </LinkContainer>
      </Nav>
      <Nav>
        <NavbarUser>
          <Avatar className="d-xl-flex d-lg-flex" />
          <span className="d-lg-none d-flex nav-link">
            {props.username ? props.username : "username"}
          </span>

          <NavDropdown
            className="d-none d-lg-flex"
            title={props.username ? props.username : "username"}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
          </NavDropdown>
        </NavbarUser>

        <div className="d-lg-none d-block">
          <Nav.Link href="#action/3.1">
            Logout
          </Nav.Link>
        </div>

        <Nav.Link onClick={() => props.changeLang()}>
          <Icon className="md-hide" src={NotificationIcon} />
          {props.lang === "en" ? "عربي" : "English"}
        </Nav.Link>
      </Nav>
    </>
  );

  const guestLinks = (
    <>
      <Nav className="me-auto">
        <LinkContainer to="/about">
          <Nav.Link>
            About
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/privacy-policy">
          <Nav.Link>
            Privacy Policy
          </Nav.Link>
        </LinkContainer>
      </Nav>
      <Nav>
        <NavbarLanguage onClick={() => props.changeLang()}>
          <span>
            {props.lang === "en" ? "عربي" : "English"}
          </span>
        </NavbarLanguage>
      </Nav>
    </>
  );

  return (
    <NavBarContainer className={isSecondary ? "navbar-secondary" : ""} collapseOnSelect expand="lg" variant={isSecondary ? "light" : "dark"}>
      <Container>
        <LinkContainer to="/">
          <NavBarContainer.Brand>
            {props.lang === "en" ? (
              <Logo src={isSecondary ? LogoIconSecondary : LogoIcon} />
            ) : (
              <Logo src={isSecondary ? ArLogoIconSecondary : ArLogoIcon} />
            )}
          </NavBarContainer.Brand>
        </LinkContainer>
        <NavbarLinksDiv>
          <NavBarContainer.Toggle aria-controls="responsive-navbar-nav">
            <BarsWrapper>
              <BarIcon className="humbergur-bar" />
              <BarIcon className="humbergur-bar" />
              <BarIcon className="humbergur-bar" />
            </BarsWrapper>
          </NavBarContainer.Toggle>
          <NavBarContainer.Collapse id="responsive-navbar-nav">
            {auth ? authLinks : guestLinks}
          </NavBarContainer.Collapse>
        </NavbarLinksDiv>
      </Container>
    </NavBarContainer>
  );
};

export default withRouter(NavBar);
