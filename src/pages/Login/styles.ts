import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #3e4651;
`;

export const RightContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #FFFFFF;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const FormContainer = styled.form`
  padding: 50px;
  display: grid;
  position: absolute;
  width: 100%;
  max-width: 400px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background-color: #FFFFFF;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 6px;

  a {
    text-align: center;
    color: rgb(56, 109, 130);
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
  }

  input {
    width: 100%;
  }
`;
