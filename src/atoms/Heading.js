import styled from 'styled-components';
import { MOBILE_WIDTH } from '../config.json';

const Heading = styled.h1`
  padding: 0 40px;
  line-height: 1.1;
  @media (max-width: ${MOBILE_WIDTH}) {
    padding: 0 20px;
    font-size: 1.3rem;
  }
`;

export default Heading;
