import styled from 'styled-components';

export default styled.div`
    position: fixed;
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.text};
    padding: 1rem;
    border-radius: 5px;
    width: '100px';
    height: '100px';
    font-size: '0.8em';
    z-index: 10;
    top: ${props => props.y};
    left: ${props => props.x};
    bottom: auto;
    right: auto;
    button {
        all: unset;
    }
`;
