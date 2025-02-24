import styled from "styled-components";

export const ParentContainer = styled.div<{
  orientation: string;
  size?: number;
  shouldShowOneItem?: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === "horizontal" ? "row" : "column"};
  width: ${(props) =>
    props.orientation === "horizontal" && props.size && props.shouldShowOneItem
      ? `${props.size}px`
      : "100%"};
  height: ${(props) =>
    props.orientation === "vertical" && props.size && props.shouldShowOneItem
      ? `${props.size + 6}px`
      : "100%"};

  @media (max-width: 560px) {
    width: ${(props) =>
      props.orientation === "horizontal" && props.size
        ? `${props.size}px`
        : "100%"};
  }
  }
`;

export const SliderContainer = styled.div<{ orientation: string }>`
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === "horizontal" ? "row" : "column"};
  overflow: hidden;
  position: relative;
  width: ${(props) => (props.orientation === "horizontal" ? "100%" : "auto")};
  max-height: ${(props) =>
    props.orientation === "vertical" ? "25rem" : "auto"};
  padding: 0.625rem 0;
  flex-grow: 1;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    max-height: ${(props) =>
      props.orientation === "vertical" ? "18.75rem" : "auto"};
  }
`;

export const SliderWrapper = styled.div<{
  translate: number;
  orientation: string;
  gap: number;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === "horizontal" ? "row" : "column"};
  transform: ${(props) =>
    `translate${props.orientation === "horizontal" ? "X" : "Y"}(${
      props.translate
    }px)`};
  transition: transform 0.5s ease-out;
  gap: ${(props) => `${props.gap}px`};
  align-items: center;
  width: ${(props) =>
    props.orientation === "horizontal" ? "max-content" : "100%"};
  min-height: ${(props) =>
    props.orientation === "vertical" ? "100%" : "auto"};

  scroll-behavior: smooth;
`;
