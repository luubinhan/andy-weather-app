import styled from 'styled-components';

const Input = styled.input`
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e0e0e0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 0;
  :focus,
  :hover {
    outline: none;
    -webkit-box-shadow: 0 0 0 1px #000000;
    box-shadow: 0 0 0 1px #000000;
  }
`;

export default Input;
