import { Avatar } from "@material-ui/core";
import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { Icon, Logo, NavBarContainer } from "./NavbarStyle";
const NavBar = ({ username }) => {
  return (
    <NavBarContainer collapseOnSelect expand="lg" variant="dark">
      <Container>
        <NavBarContainer.Brand href="#home">
          <Logo src="../icons/Weelz-English-White.png" />
        </NavBarContainer.Brand>
        <NavBarContainer.Toggle aria-controls="responsive-navbar-nav" />
        <NavBarContainer.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
              <Icon src="../icons/calender.svg" />
              Trips
            </Nav.Link>
            <Nav.Link href="#">
              <Icon src="../icons/information.svg" />
              About
            </Nav.Link>
            <Nav.Link href="#">
              <Icon src="../icons/AddNew.svg" />
              New Trip
            </Nav.Link>
          </Nav>
          <Nav>
            <Avatar className="d-sm-none d-xl-flex d-lg-flex" />
            <NavDropdown
              className="d-sm-none d-xl-flex d-lg-flex"
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
            <Nav.Link eventKey={2} href="#memes">
              <Icon src="../icons/notification.svg" />
              Language
            </Nav.Link>
          </Nav>
        </NavBarContainer.Collapse>
      </Container>
    </NavBarContainer>
  );
};

export default NavBar;
