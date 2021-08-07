import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavBarContainer = styled(Navbar)`
  background: linear-gradient(to left, #00c3e1, #584995);
`;

export const Logo = styled.img`
  object-fit: contain;
  width: 120px;
`;

export const Icon = styled.img`
  object-fit: contain;
  width: 20px;
  margin-right: 5px;
`;
