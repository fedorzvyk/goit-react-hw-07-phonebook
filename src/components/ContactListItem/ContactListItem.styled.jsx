import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${p => p.theme.space[6]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  @media screen and (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes.s};
    gap: ${p => p.theme.space[4]}px;
  }
`;
export const ItemName = styled.span`
  /* max-width: 200px; */
  /* inline-size: 150px; */
  /* overflow-wrap: break-word; */
  /* hyphens: manual; */
  min-width: 80px;

  /* text-overflow: ellipsis;

  overflow: hidden; */
`;

export const ContactWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  /* margin-right: 20px; */
  /* align-items: center; */
  /* justify-content: space-between; */
  /* gap: ${p => p.theme.space[4]}px; */
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    /* flex-direction: column;
    gap: ${p => p.theme.space[2]}px; */
  }
`;
