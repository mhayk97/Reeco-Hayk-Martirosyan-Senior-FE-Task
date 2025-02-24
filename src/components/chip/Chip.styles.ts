import styled from "styled-components";

export const StyledChip = styled.div<{ bgColor?: string; size: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size / 2.5}px`};
  background: ${({ bgColor }) =>
    bgColor || "linear-gradient(135deg, #007bff, #0056b3)"};
  color: white;
  border-radius: 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out, transform 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  }
`;
