import styled from "styled-components";

const defaultNavBarHeight = '70px';

export const Container = styled.div`
  height: 100%;
  background-color: #eeeeef;
`;

export const Body = styled.div`
  display: flex;
  height: calc(100% - ${defaultNavBarHeight});
`;

export const Menu = styled.div`
  width: 100%;
  max-width: 250px;
  background-color: rgb(249, 249, 249);;
`;

export const Children = styled.div`
  width: 100%;
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

export const CondoInfo = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 16px 16px;
  padding: 16px;
`;

export const CondoName = styled.p`
  font-size: 11px;
  font-weight: bold;
`;

export const CondoText = styled.p`
  font-size: 11px;
  margin-top: 6px;
`;

export const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  padding-left: 16px;
  margin-top: 3px;
  cursor: pointer;
  
  &:hover {
    background-color: #e6ebed;
    border-right: solid 3px;
    font-weight: bold;
  }
`;

export const ItemMenuName = styled.div`
  font-size: 12px;
  margin-left: 16px;
`;
