import styled from 'styled-components';

export const FiltersContainer = styled.div`
  margin-top: 42.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .separator {
    margin: 0 40px;
    height: 59px;
    width: 2px;
    background: ${(p) => p.theme.colors.gray300};
  }

  .filters {
    display: inherit;
    flex-wrap: wrap;
    row-gap: 26.5px;
    align-items: inherit;
    height: inherit;
  }

  .pagination-wrapper {
    flex-shrink: 0;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
    align-items: flex-start;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tabletMedium}) {
    .pagination-wrapper {
      display: none;
    }
  }
`;
