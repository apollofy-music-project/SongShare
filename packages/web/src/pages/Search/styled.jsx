import styled from 'styled-components';

const SearchStyles = styled.div`
    * {
    color: ${({ theme }) => theme.text};
    border: ${({ theme }) => theme.text};
    fill: ${({ theme }) => theme.text};
     }
`;

export default SearchStyles;
