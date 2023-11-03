import styled from "styled-components";

export const Menu = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Item = styled.li`
  color: ${(p) => p.theme.colors.textColor};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.28;
`;
