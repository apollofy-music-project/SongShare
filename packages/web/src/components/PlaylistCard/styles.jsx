import styled from 'styled-components';

const PlaylistCard = styled.div`
    color: ${({ theme }) => theme.text};
    .PlaylistCard__container {
        background-image: url(${props => props.image});
    }
    .PlaylistCard__description {
        color: #b4b4b4;
        &:hover {
            color: ${({ theme }) => theme.text};
            transition: 0.3s;
        }
    }
    .PlaylistCard__playButton {
        fill: ${({ theme }) => theme.background};
    }
`;

export default PlaylistCard;
