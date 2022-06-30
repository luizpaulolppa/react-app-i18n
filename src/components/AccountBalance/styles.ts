import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  padding: 26px 26px;
  background-color: #FFFFFF;
  border-radius: 5px;
`;

export const Balance = styled.div`
  & + & {
    border-left: 1px solid rgb(238, 238, 239);
    padding-left: 24px;
  }
`;

export const Name = styled.p`
  font-size: 8px;
  line-height: 8px;
`;

export const Value = styled.p`
  font-size: 16px;
`;

export const Eye = styled.div`
  cursor: pointer;
`;
