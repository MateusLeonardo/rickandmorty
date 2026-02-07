import styled from "styled-components";

export const ButtonWithPropsContainer = styled.button`
  padding: 8px 16px;
  border: 2px solid #667eea;
  background-color: #667eea;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.2);
  transition: all 0.2s ease-in-out;
  min-width: 120px;

  &:hover {
    background-color: #5568d3;
    border-color: #5568d3;
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    background-color: #4a5bc4;
    border-color: #4a5bc4;
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(102, 126, 234, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }

  &:disabled {
    background-color: #e0e0e0;
    border-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;

    &:hover {
      background-color: #e0e0e0;
      border-color: #e0e0e0;
      transform: none;
      box-shadow: none;
    }
  }
`;
