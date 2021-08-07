import { Avatar } from "@material-ui/core";
import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import {
  Icon,
  Logo,
  NavBarContainer,
} from "../../src/components/Navbar/NavbarStyle";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar/Navbar";
export const NavBar = ({ username }) => {
  return <Navbar />;
};
NavBar.propTypes = {
  username: PropTypes.shape({}),
};

NavBar.defaultProps = {
  username: "bassam",
};
