import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius:10px;
    cursor: pointer;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

`
const ImageCard = styled.img`
    width:250px;
    height:220px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    @media (max-width:1280px){
        width:100%;
        height:auto;
    }
`
const CardContainer = styled.div`
    padding: 0px 0px;
`
const Heading = styled.h4`
        padding-bottom: 10px;
        margin-top: 5px;
        text-align:center;
`
function Card({ imageName, imageSrc }) {


    return (
        <>
            <CardDiv>
                <ImageCard src={require(`../../assets/images/${imageSrc}`)} alt={imageName} />
                <CardContainer>
                    <Heading><b>{imageName}</b></Heading>
                </CardContainer>
            </CardDiv>
        </>
    )
}

export default Card;