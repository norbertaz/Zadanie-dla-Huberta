import styled from 'styled-components'

export const Button = styled.button `
    font-size: 32px;
    font-weight: bold;
    border: 0;
    border-radius: 10px;
    padding: 10px 15px;
    margin-right: 5px;
    cursor: pointer;

    margin-left: ${props => props.ml};
    background-color: ${(props) => props.bg};
`

export const TimeWrapper = styled.p `
    p {
        text-align: center;
        font-size: 128px;
    }
`