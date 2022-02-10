import styled from "styled-components";

export const Container = styled.div `
    position: relative;
`
export const Carousel = styled.div `
    height: 500px;
    width: 500px;
    overflow: hidden;
    box-shadow: 0 0 10px  #aaa;
`
export const ImageContainer = styled.div `
    display: flex;
    div{
        img{
            height: 500px;
            width: 500px;
            object-fit: cover;   
        }
    }
`
export const ArrowLeft = styled.div`
    position: absolute;
    top: 50%;
    z-index: 2;
    width: 20px;
    height: 20px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    transform: rotate(-45deg);
    left:1%
`
export const ArrowRight = styled.div`
    position: absolute;
    top: 50%;
    z-index: 2;
    width: 20px;
    height: 20px;
    border-top: 2px solid black;
    border-right: 2px solid black;
    transform: rotate(45deg);
    right:1%
`
