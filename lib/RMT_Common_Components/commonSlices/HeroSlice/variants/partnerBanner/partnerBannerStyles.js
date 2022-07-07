import styled from "styled-components";

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 467px;
  padding-right: 99px;
  h1 {
    margin-bottom: 24px;
  }
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    letter-spacing: 0.25px;
  }
`;

export const PartnerBannerDiv = styled.div`
  display: flex;
  background: #fafafb;
  border-radius: 25px;
  margin-top: 48px;
`;

export const PartnerBannerContainer = styled.div`
  display: flex;
  padding: 26px 91px;
  align-items: center;

  p {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #272e61;
    margin-left: 16px;
    margin-bottom: 0px;
    text-transform: uppercase;
  }
`;

export const PartnerLogo = styled.img`
  width: 48px;
  height: 64px;
`;
