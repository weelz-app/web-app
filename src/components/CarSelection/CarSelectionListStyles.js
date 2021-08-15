import styled from "styled-components";

export const CarSelectionListWrapper = styled.section`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;

export const NoCarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoCarsImg = styled.img`
  width: 346.4px;
  height: 191.8px;
  object-fit: contain;
  
  @media only screen and (max-width: 410px) {
    & {
      width: 300px;
      height: auto;
    }
  }

  @media only screen and (max-width: 365px) {
    & {
      width: 260px;
    }
  }
`;

export const NoCarsText = styled.p`
  width: 250px;
  margin-top: 11.7px;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.54;
  letter-spacing: -0.42px;
  text-align: center;
  color: #000;
`;

export const NoCarsHighlight = styled.span`
  color: #00c3e1;
`;
