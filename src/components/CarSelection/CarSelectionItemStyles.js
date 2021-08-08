import styled from "styled-components";

export const CarSelectionItemWrapper = styled.section`
  padding: 26.5px 17.5px;
  width: 100%;
  height: 260px;
  border-radius: 5px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 195, 225, 0.05),
    rgba(35, 20, 92, 0.05)
  );
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
  border: solid 2.5px transparent;
  cursor: pointer;

  &:hover, &.active {
    border: solid 2.5px #00c3e1;
  }
`;

export const DetailsWrapper = styled.div`
  @media only screen and (min-width: 751px) and (max-width: 991px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (min-width: 430px) and (max-width: 575px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: #000;
  margin: 0 33px 8px 0;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 0.85;
`;

export const Description = styled.p`
  margin: 3px 0 15.5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #b8b8b8;

  @media only screen and (min-width: 751px) and (max-width: 991px) {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 430px) and (max-width: 575px) {
    margin-bottom: 0;
  }
`;

export const CarImage = styled.img`
  width: 270px;
  position: absolute;
  left: -110px;
  bottom: 22px;

  @media only screen and (max-width: 991px) {
    width: 100%;
    left: -35px;
  }

  @media only screen and (min-width: 355px) and (max-width: 380px) {
    width: 270px;
    left: -70px;
  }

  @media only screen and (max-width: 354px) {
    width: 240px;
    left: -75px;
  }
`;

export const PriceWrapper = styled.section`
  display: flex;
  align-items: center;
`;

export const WalletIconWrapper = styled.div`
  margin-right: 15px;
`;

export const Price = styled.span`
  display: block;
  margin-bottom: 5px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 0.82;
  color: #584995;
`;

export const OriginalPrice = styled.span`
  display: block;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.06;
  text-decoration: line-through;
  color: #c2c2c2;
`;
