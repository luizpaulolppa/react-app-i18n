import styled from "styled-components";

export interface IItemMenu {
  active?: boolean;
  center?: boolean;
}

export const ItemMenuContainer = styled.div<IItemMenu>`
  display: flex;
  align-items: center;
  padding: 6px;
  padding-left: 16px;
  margin-top: 3px;
  cursor: pointer;
  ${({ center }) => (!!center ? `justify-content: center;` : ``)}
  ${({ center }) => (!!center ? `padding-left: 0px;` : ``)}
  ${({ active }) =>
    !!active ? `border-right: solid 3px rgb(56, 109, 130);` : ``}
  ${({ active }) => (!!active ? `background-color: #e6ebed;` : ``)}
    ${({ active }) => (!!active ? `font-weight: bold;` : ``)}

  &:hover {
    background-color: #e6ebed;
  }
`;

export const ItemMenuName = styled.div`
  font-size: 14px;
  margin-left: 16px;
`;
