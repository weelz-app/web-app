import { Avatar } from "@material-ui/core";
import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { Icon, Logo, NavBarContainer, NavbarUser, NavbarLinksDiv } from "./NavbarStyle";
import { LinkContainer } from 'react-router-bootstrap';

import LogoIcon from "../../icons/Weelz-English-White.png";
import CalenderIcon from "../../icons/calender.svg";
import InformationIcon from "../../icons/information.svg";
import AddNewIcon from "../../icons/AddNew.svg";
import NotificationIcon from "../../icons/notification.svg";

const NavBar = ({ username }) => {
  return (
    <NavBarContainer collapseOnSelect expand="lg" variant="dark">
      <Container>
        <LinkContainer to="/">
          <NavBarContainer.Brand>
            <Logo src={LogoIcon} />
          </NavBarContainer.Brand>
        </LinkContainer>
        <NavbarLinksDiv>
          <NavBarContainer.Toggle aria-controls="responsive-navbar-nav" />
          <NavBarContainer.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/trips">
                <Nav.Link>
                  <Icon className="md-hide" src={CalenderIcon} />
                  {/* <Icon  className="lg-hide" src={BlackCalenderIcon} /> */}
                  Trips
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link href="/about">
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
                  title={username ? username : "username"}
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
          </NavBarContainer.Collapse>
        </NavbarLinksDiv>
      </Container>
    </NavBarContainer>
  );
};

export default NavBar;
