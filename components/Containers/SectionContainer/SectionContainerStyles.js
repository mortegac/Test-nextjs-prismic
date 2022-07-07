import styled from "styled-components";
export const SectionContainerBase = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.sectionContainer.padding.desktop};

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    padding: ${props => props.theme.sectionContainer.padding.mobile};
  }
`;
