import styled from 'styled-components';

const LoadingBar = styled.div`
  height: 2px;
  width: 100%;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: -webkit-flex;
  display: flex;
  :before {
    height: 2px;
    width: 100%;
    margin: 0;
    background-color: #000;
    content: '';
    -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  @-webkit-keyframes running-progress {
    0% {
      margin-left: 0px;
      margin-right: 100%;
    }
    50% {
      margin-left: 25%;
      margin-right: 0%;
    }
    100% {
      margin-left: 100%;
      margin-right: 0;
    }
  }
  @keyframes running-progress {
    0% {
      margin-left: 0px;
      margin-right: 100%;
    }
    50% {
      margin-left: 25%;
      margin-right: 0%;
    }
    100% {
      margin-left: 100%;
      margin-right: 0;
    }
  }
`;

export default LoadingBar;
