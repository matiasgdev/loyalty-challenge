import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;

  background-color: ${(p) => p.theme.colors.white};

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    padding: 44px 0px;
  }
`;

export default NavbarContainer;
