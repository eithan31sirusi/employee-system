import styled from "styled-components";

export const PageLogo = styled.Image`
  width: 200px;
  height: 125px;
  resize-mode: contain;
`;

export const PageTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${dark};
  padding: 10px;
  padding-top: 10%;

  align-self: flex-end;

  ${(props) =>
    props.welcome &&
    `
font-size: 35px;
  `}
`;

export const PageTitleBG = styled.View`
  width: 100%;
  height: 25%;
  background-color: ${bgdark};
`;

export const SubTitle = styled.Text`
  padding-top: 25%;
  font-size: 12px;
  margin-bottom: 10px;
  color: ${dark};
  align-self: flex-end;
  ${(props) =>
    props.welcome &&
    `
  margin-bottom: 10px;
  font-weight: normal;
  `}
`;
