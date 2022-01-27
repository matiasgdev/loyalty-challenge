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

  margin: 0px ${(p) => p.theme.spacing.sideMargin.desktop};

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
     margin: 0px ${(p) => p.theme.spacing.sideMargin.desktopMedium};
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
     margin: 0px ${(p) => p.theme.spacing.sideMargin.desktopMedium};
  }
  @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
     margin: 0px ${(p) => p.theme.spacing.sideMargin.mobile};
  }
`;

export default NavbarContainer;
