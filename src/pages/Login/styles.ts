import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  /* background-color: black; */
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 50%;
  background-color: #3e4651;
`;

export const RightContainer = styled.div`
  display: flex;
  width: 50%;
  background-color: #FFFFFF;
`;

export const FormContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background-color: #FFFFFF;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 6px;
`;
