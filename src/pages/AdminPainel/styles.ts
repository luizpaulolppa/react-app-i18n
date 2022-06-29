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
  background-color: #FFFFFF;
`;

export const Children = styled.div`
  width: 100%;
  background-color: blue;
`;
