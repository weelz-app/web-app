import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  padding: 12.8px 0;
  background-color: #fff;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 375px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Title = styled.h4`
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.88;
    color: #2f1b7a;
    margin: 0;
`;

export const City = styled.span`
    margin: 2.5px 0 2.5px 10px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 2.5;
    color: #bfbfbf;

    @media only screen and (max-width: 375px) {
        margin-right: 0;
        margin-left: 0;
    }

    .App.ar & {
      margin: 2.5px 10px 2.5px 0;
    }
`;
