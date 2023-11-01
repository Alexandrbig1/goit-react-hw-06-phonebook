import styled from "styled-components";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdOutlineDeleteForever } from "react-icons/md";

export const List = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #050505;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
`;

export const ContactIcon = styled(BsFillPersonVcardFill)`
  margin-right: 8px;
  width: 24px;
  height: 24px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  padding: 4px 4px;
  border-radius: 24px;
  cursor: pointer;

  transition: 0.3s;
`;

export const ContactDelete = styled(MdOutlineDeleteForever)`
  width: 24px;
  height: 24px;
  transition: 0.3s;

  color: ${(p) => p.theme.colors.deleteBtn};
  &:hover {
    color: #fe4f4f;
  }
`;
