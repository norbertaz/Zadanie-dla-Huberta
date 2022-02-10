import styled from "styled-components";

export const NavBar = styled.nav`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    background-color: #4169e1;
    padding: 15px 0;
`
export const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
`
export const Li = styled.li`
    display: inline-block;
    > * {
        text-decoration: none;
        color: #fff;
        font-size: 26px;
    }
`
