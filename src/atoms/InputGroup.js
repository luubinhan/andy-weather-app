import styled from 'styled-components';
import { MOBILE_WIDTH } from '../settings.json';

const InputGroup = styled.div`
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
  input {
    padding-left: 40px;
  }
  @media (max-width: ${MOBILE_WIDTH}) {
    flex-basis: 100%;
    display: flex;
  }
`;

export default InputGroup;
