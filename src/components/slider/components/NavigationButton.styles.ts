import styled from "styled-components";

export const ArrowButton = styled.button<{
  orientation: string;
  direction: "prev" | "next";
}>`
  position: absolute;
  z-index: 20;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.625rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  ${(props) =>
    props.orientation === "horizontal"
      ? `
            ${props.direction === "prev" ? "left: -3rem;" : "right: -3rem;"}
            top: 50%;
            transform: translateY(-50%);
          `
      : `
            ${props.direction === "prev" ? "top: -3rem;" : "bottom: -3rem;"}
            left: 50%;
            transform: translateX(-50%);
          `}

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
  }
  @media (max-width: 400px) {
    ${(props) =>
      props.orientation === "horizontal"
        ? `
              ${
                props.direction === "prev"
                  ? "left: -2.5rem;"
                  : "right: -2.5rem;"
              }
              top: 50%;
              transform: translateY(-50%);
            `
        : `
              ${props.direction === "prev" ? "top: -3rem;" : "bottom: -3rem;"}
              left: 50%;
              transform: translateX(-50%);
            `}
  }
`;
