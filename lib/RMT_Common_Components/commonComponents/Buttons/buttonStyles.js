import styled from "styled-components";

export const Anchor = styled.a`
  &.fullwidth {
    width: 100%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  text-decoration: none;
  &.normal {
    width: fit-content;
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  font-weight: bold;
  font-family: ${(props) => props.theme.typography.fontFamily};
  white-space: nowrap;
  border-radius: ${(props) => props.theme.button.borderRadius};
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  height: ${(props) => props.theme.button.height};
  width: 100%;
  ${(props) =>
    props.name === "primary" &&
    `
         background:${props.theme.colors.primary};
         color: ${props.theme.colors.secondary};
         border: 1px solid ${props.theme.colors.primary};
         :hover {
          background-color: ${props.theme.colors.bgHover};
          color: ${props.theme.colors.secondary};
        }
        padding: ${props.theme.button.padding};
    `}
  ${(props) =>
    props.name === "secondary" &&
    `
           background:${props.theme.colors.bgColorTertiary};
           color: ${props.theme.colors.primary};
           border: 1px solid ${props.theme.colors.bgColorTertiary};
           :hover {
            background: ${props.theme.colors.bgColorPrimary};
            border: 1px solid ${props.theme.colors.bgColorPrimary};
          }
          padding: ${props.theme.button.padding};
      `}

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;
