import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: ${p => p.theme.space[2]}px;
  }
`;
export const ItemName = styled.span`
  /* max-width: 200px; */
  min-width: 80px;
`;
