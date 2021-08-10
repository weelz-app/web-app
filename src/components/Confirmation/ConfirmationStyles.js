import styled from "styled-components";

export const ConfirmationWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #0006;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmationModal = styled.div`
  width: 283px;
  height: 198.5px;
  border-radius: 5px;
  box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ConfirmationOuterIcon = styled.div`
  width: 98px;
  height: 98px;
  margin: 0 30.5px 8px;
  padding: 8.5px;
  background-color: #fff;
  position: absolute;
  top: -49px;
  border-radius: 50%;
`;

export const ConfirmationInnerIcon = styled.div`
  width: 81px;
  height: 81px;
  padding: 17px;
  background-color: ${({ type }) =>
    type === "success"
      ? "#c9e7ca"
      : type === "error"
      ? "#ffc3c8"
      : "#f1c40f8a"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmationCloseButton = styled.div`
  position: absolute;
  right: 4px;
  margin: 4px;
  cursor: pointer;
`;

export const ConfirmationTitle = styled.h2`
  width: ${({ type }) => (type === "success" ? "148px" : "158px")};
  margin: 56px 5.5px 9px;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.54;
  letter-spacing: -0.42px;
  text-align: center;
  color: #000;
`;

export const ConfirmationMessage = styled.p`
  width: ${({ type }) => (type === "success" ? "159px" : "203px")};
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: center;
  color: #8d8d8d;
  margin: unset;
`;

export const ConfirmationButtonsWrapper = styled.div`
  display: flex;

  button {
    margin: 20px 15px;
  }
`;

export const ConfirmationButton = styled.button`
  width: 16px;
  margin: 20px 71.5px 0;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.26px;
  text-align: center;
  color: #2f1b7a;
  border: none;
  outline: 0;
  background-color: transparent;

  &:hover {
    color: #130b33;
  }
`;
