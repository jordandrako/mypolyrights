import styled from "styled-components";
import { getTheme } from '../../styles/theme';

const { palette } = getTheme();

export const Root = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: ${palette.themeDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-top: 5px solid ${palette.blue};
  box-shadow: inset 0 5px ${palette.red};
`;

export const Logo = styled.h1`
  font-weight: bolder;
  font-size: 3.5em;
  margin: .5em 0;
`;

export const Body = styled.main`
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
`;

export const Footer = styled.footer`
  background: ${palette.themeDark};
  color: ${palette.themeLight};
  padding: 30px;
`;