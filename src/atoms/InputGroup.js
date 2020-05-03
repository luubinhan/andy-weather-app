import styled from 'styled-components';

const InputGroup = styled.div`
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
  input {
    padding-left: 40px;
  }
  @media (max-width: 767px) {
    flex-basis: 100%;
    display: flex;
  }
`;

export default InputGroup;
