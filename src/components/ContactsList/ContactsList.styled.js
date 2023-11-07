import styled from "styled-components";

export const Menu = styled.ul`
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  max-height: 19.7rem;
  overflow: scroll;
`;

export const Item = styled.li`
  color: ${(p) => p.theme.colors.textColor};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.28;
`;
