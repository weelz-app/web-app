import styled from "styled-components";

export const DivTrip = styled.div`
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 6px -3px;
    min-height: 100%;
    position: relative;

`;
export const Head = styled.div`
    overflow: hidden;
    min-height: 200px;
    position: relative;
`;
export const ImgTrip = styled.img`
    width: 100%;
    position: absolute;
    min-height: 100%;
    z-index: 0;
`;

export const HTrip = styled.h6`
  position: relative;
  z-index: 2;
  color: #fff;
`;

export const DTrip = styled.div`
    z-index: 2;
    color: #fff !important;
`;


export const DetaTrip = styled.div`
    padding-left: 40px !important;
    position: relative;
    color: #474747;
    .font-icon-d{
      position: absolute;
      left: 13px;
      font-size: 16px;
      top: 5px;
      color: #00c3e1;
    }
`;

export const SectionTrip = styled.section`
    .color-gr{
      color: #00c3e1;
      font-weight: bold;
    }
`;
