import styled from "styled-components";

export const DEFAULT_NAV_BAR_HEIGHT = '70px';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${DEFAULT_NAV_BAR_HEIGHT};
  background-color: #3e4651;
  padding: 16px 16px;

  img {
    max-width: 150px;
  }

  a {
    color: #FFFFFF;
    text-decoration: none;
  }
`;
