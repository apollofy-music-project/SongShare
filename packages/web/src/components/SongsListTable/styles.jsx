import styled from 'styled-components';

const SongListTable = styled.div`
    * {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }
    .songsList__container__header {
        height: 5rem;
    }
    .songsList__container__header__item {
        border: 1px solid ${({ theme }) => theme.text};
    }
        .selected {
        border: 3px solid ${({ theme }) => theme.main};

        }
`;

export default SongListTable;
