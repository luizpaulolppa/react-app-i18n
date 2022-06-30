import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const CondosContainer = styled.div`
  height: 200px;
  width: 100%;
  max-width: 1400px;
  margin-top: 16px;
`;

export const FiltersContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 16px;
  color: rgb(44, 44, 44);
`;

export const CondosListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const CondoCardContainer = styled.div`
  background-color: #FFFFFF;
  height: 90px;
  width: 260px;
  border-radius: 5px;
  margin-top: 16px;
  margin-left: 16px;
  padding: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    border: 1px solid rgb(188, 189, 189);
  }
`;

export const Text = styled.p`
  font-size: 12px;
  color: rgb(88, 89, 91);
  line-height: 20px;
`;

export const LoadingCondos = styled.div`
  width: 100%;
  padding: 40px;
  text-align: center;
`;
