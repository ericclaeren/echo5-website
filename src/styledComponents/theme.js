import styled from 'styled-components';

const ThemeSettings = {
  retroGreen: {
    backgroundColor: '',
    contrastColor: '',
    backgroundGradient: '',
  },
  dark: {
    contrastColor: '',
    backgroundGradient: '',
  },
};

export const InlineButton = styled.button`
  display: inline;
  padding: 0 0.15em;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;

  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  background-color: transparent;
  cursor: pointer;

  transition-property: color background-color border-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  &:focus,
  &:hover {
    color: white;
    border-bottom-color: #fff;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export default ThemeSettings;
