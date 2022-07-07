import styled from "styled-components";

export const DescriptionAndFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
  position: relative;
  h1 {
    font-size: 62px;
    line-height: 76px;
    margin-bottom: 24px;
  }
  div {
    h1 {
      margin-bottom: 0px;
    }
  }
  p {
    margin-top: 0px;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: ${(props) => props.theme.typography.letterSpacing};
    line-height: ${(props) => props.theme.typography.p.desktop.lineHeight};
    max-width: 490px;
    margin-bottom: 48px;
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

export const Section = styled.div`
  max-width: ${(props) => props.theme.sliceContainer.maxWidth};
  width: ${(props) => props.theme.sliceContainer.maxWidth};
  padding: 80px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Image = styled.img`
  width: 55%;
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: -40px;
  transform: translate(140px, 30px);
`;

export const PlayVideoButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
  &:hover {
    svg {
      filter: hue-rotate(-40deg) saturate(7);
      transform: scale(1.05);
      transition: all 0.3s ease;
    }
  }
`;
export const Form = styled.form`
  justify-content: flex-start;
  max-width: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  align-items: flex-start;
  div {
    width: 100%;
    height: 100%;
    flex-direction: row;
    display: flex;
    a {
      font-size: 14px;
      margin-left: 10px;
    }
    button {
      padding: 8px 35px;
      height: 100%;
      font-size: 14px;
    }
  }
  input[type="email"] {
    width: 100%;
    height: 20px;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    font-family: Poppins, sans-serif;
    padding: 13px;
    color: ${(props) => props.theme.colors.textPrimary};
    font-weight: 400;
    font-size: 16px;
    transition: all 0.4s ease 0s;
    outline: none;
    box-shadow: transparent 0px 0px 0px 0px;
    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
    }
  }
`;

export const PlayVideoContainer = styled.div`
  width: 30%;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
