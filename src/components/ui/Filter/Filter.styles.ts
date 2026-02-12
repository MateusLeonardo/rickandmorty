import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const StyledSelect = styled.select`
  padding: 10px 36px 10px 14px;
  border: 2px solid #333;
  background-color: #ffffff;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23667eea' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  min-width: 160px;

  &:hover {
    border-color: #5568d3;
  }

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`;

export const StyledInput = styled.input`
  padding: 10px 14px;
  border: 2px solid #333;
  background-color: #ffffff;
  color: #333;
  font-size: 14px;
  border-radius: 8px;
  min-width: 200px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #9e9e9e;
  }

  &:hover {
    border-color: #5568d3;
  }

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`;

export const FilterEmptyMessage = styled.p`
  color: #9e9e9e;
  font-size: 14px;
  margin: 0;
`;
