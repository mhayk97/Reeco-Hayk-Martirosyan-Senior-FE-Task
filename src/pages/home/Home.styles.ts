import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const SliderWrapper = styled.div`
  margin: 4rem 0;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Section = styled.div`
  margin: 4rem 8rem;
  @media (max-width: 500px) {
    margin: 4rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  margin-inline-start: 0;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;
