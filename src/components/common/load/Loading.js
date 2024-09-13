import styled, {
    keyframes
} from 'styled-components';

const spinner = keyframes`
to{
    transform: rotate(360deg); 
  }
`;

const Loading = styled.div`
    width: ${({ size }) => size}rem;
    height: ${({ size }) => size}rem;
    border: 15px ${({ border }) => border};

    border-radius: 50px;

    animation: ${spinner}
        ${({ speedborder }) => speedborder}s
        ease-out infinite;
    z-index: 100;
`;

Loading.defaultProps = {
    border: 'dotted #F7971E',
    speedborder: '0.2',
    size: '2'
};

export default Loading;
