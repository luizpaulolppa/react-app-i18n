import styled from "styled-components";

interface IArrowContainer {
  center: boolean;
}

interface IMenuContainer {
  isOpen: boolean;
}

export const MenuContainer = styled.div<IMenuContainer>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(249, 249, 249);
  width: 100%;
  ${({ isOpen }) => (isOpen ? `max-width: 250px;` : `max-width: 80px;`)}
`;

export const ChangeCondo = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
  font-size: 10px;
`;

export const TextChangeCondo = styled.p`
  color: rgb(56, 109, 130);
  cursor: pointer;
  font-weight: bold;
`;

export const CondoText = styled.p`
  font-size: 11px;
  margin-top: 6px;
`;

export const CondoName = styled.p`
  font-size: 11px;
  font-weight: bold;
`;

export const CondoInfo = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 16px 16px;
  padding: 16px;
`;

export const ArrowContainer = styled.div<IArrowContainer>`
  display: flex;
  cursor: pointer;
  padding: 16px;
  ${({ center }) =>
    center ? `justify-content: center;` : `justify-content: flex-end;`}
`;

export const MenuHeader = styled.div``;
