import React from 'react';
import styled from "styled-components"

const StyledButton = styled.button`
cursor: pointer;
padding: 25px;
width: 100%;
text-align: center;
background-color: ${props => props.buttonColor ? props.buttonColor :  "white"};
border-color: transparent;
font-weight: bold;
:focus {
    border-color: transparent;
    outline: none;
}
:hover {
    background-color: ${props => props.buttonColor ? props.buttonColor :  "white"};
}
`;

const IconArrow = styled.i`
font-size: 1.5em;
color: ${props => props.iconColor ? props.iconColor : "#885EAD" };
`

const ContentWrapper = styled.span`
display: flex;
justify-content: space-between;
`
const ButtonContent = styled.span`
color: ${props => props.contentColor ? props.contentColor : "#885EAD" };
font-size: 1.3em;
font-weight: bold;
`;

const Button = props => (
    <StyledButton
        type={props.type}
        buttonColor={props.buttonColor}
        onClick={props.onClick}>
        {props.children ? props.children :
        (
            <ContentWrapper>
                <ButtonContent contentColor={props.contentColor} >{props.content}</ButtonContent>
                <IconArrow iconColor={props.iconColor} className="icon-arrow-thin-right"/>
            </ContentWrapper>
        )}
    </StyledButton>
)

export default Button