import styled from "styled-components";
import BaseButton from "./base";


const HeroButton = styled(BaseButton)`

  width: 318px;
  height: 80px;
  padding: 0px;
  border-radius: 24px;
  border: none;
  margin-top: 64px;
  
  background: ${(p) => p.theme.bgColors.brand};
  color: ${(p) => p.theme.colors.white};

  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-arrow-btn {
    margin-left: 12.5px;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    height: 64px;
    width: 303px;
    margin-top: 40px;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.mobileSmall}) {
    height: 64px;
    width: 100%;
  }
`;

export default HeroButton;