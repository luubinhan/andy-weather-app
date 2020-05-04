import styled from 'styled-components';
import { MOBILE_WIDTH } from '../settings.json';

const SubHeading = styled.h4`
  padding: 0 40px;
  font-weight: normal;
  color: #676767;
  margin-bottom: 40px;
  @media (max-width: ${MOBILE_WIDTH}) {
    padding: 0 20px;
    margin-bottom: 20px;
  }
`;

export default SubHeading;
