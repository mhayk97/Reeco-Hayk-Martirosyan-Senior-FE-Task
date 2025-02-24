import styled from "styled-components";

export const Card = styled.div`
  width: 13.75rem;
  padding: 0.9375rem;
  border-radius: 0.9375rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 16.25rem;
  overflow: hidden;
  border: 1px solid rgba(200, 200, 200, 0.3);

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 8.75rem;
  border-radius: 0.625rem;
  object-fit: contain;
  display: block;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #222;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 0;
  text-align: center;
  line-height: 1.5;
  max-width: 90%;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;
