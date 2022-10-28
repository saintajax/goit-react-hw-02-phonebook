import styled from 'styled-components';

export const Btn = styled.button`
  width: 150px;
  height: 30px;
  border: 2px solid ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.radii.sm};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :active {
    background-color: ${props => props.theme.colors.accent};
    scale: 0.95;
  }
`;
