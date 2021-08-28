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
            {/* <Icon  className="lg-hide" src={BlackCalenderIcon} /> */}
            Trips
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>
            <Icon className="md-hide" src={InformationIcon} />
            {/* <Icon  className="lg-hide" src={BlackInformationIcon} /> */}
            About
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/add-trip">
          <Nav.Link>
            <Icon className="md-hide" src={AddNewIcon} />
            {/* <Icon  className="lg-hide" src={BlackAddNewIcon} /> */}
            New Trip
          </Nav.Link>
        </LinkContainer>
      </Nav>
      <Nav>
        <NavbarUser>
          <Avatar className="d-xl-flex d-lg-flex" />
          <NavDropdown
            className="d-xl-flex d-lg-flex"
            title={props.username ? props.username : "username"}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </NavbarUser>

        <Nav.Link eventKey={2} href="#memes">
          <Icon className="md-hide" src={NotificationIcon} />
          {/* <Icon className="lg-hide" src={BlackNotificationIcon} /> */}
          Language
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
        <NavbarLanguage>
          <NavDropdown
            className="d-xl-flex d-lg-flex"
            title={props.language ? props.language : "عربي"}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </NavbarLanguage>
      </Nav>
    </>
  );

  return (
    <NavBarContainer className={isSecondary ? "navbar-secondary" : ""} collapseOnSelect expand="lg" variant={isSecondary ? "light" : "dark"}>
      <Container>
        <LinkContainer to="/">
          <NavBarContainer.Brand>
            {isSecondary ? (
              <Logo src={LogoIconSecondary} />
            ) : (
              <Logo src={LogoIcon} />
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
