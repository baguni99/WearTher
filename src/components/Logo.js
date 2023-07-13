import styled from "styled-components";

export const Logo = styled.img`
  width: 200px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const LogoLeft = styled(Logo)`
  margin-right: 20px;
`;

export const LogoRight = styled(Logo)`
  margin-left: 20px;
`;
