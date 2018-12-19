import React from "react";
import styled from "styled-components"

import profile from "../../../assets/profile.jpg"

const StyledHeader = styled.nav`
display: flex;
justify-content: stretch;
width: 100%;
min-height: 100px;
`
const Wrapper = styled.div`
position: relative;
display: flex;
padding: 15px;
align-items: center;
width: 100%;
`
const TextWrapper = styled.div`
padding: 0px 20px;
`
const StyledImage = styled.img`
position: absolute;
right: 35px;
top: 25px;
width: 40px;
height: 40px;
border-radius: 100%;
`
const IconChart = styled.i`
font-size: 1.2em;
color: white;
`
const Title = styled.span`
display: block;
color: white;
font-size: 1em;
font-weight: bold;
`
const PriceNumber = styled.span`
color: white;
font-size: 0.8em;
font-weight: bold;
`

const Header = props => (
    <StyledHeader>
        <Wrapper>
            <IconChart className="icon-line-chart"/>
            <TextWrapper>
                <Title>Nova cotação:</Title>
                <PriceNumber>#0980</PriceNumber>
            </TextWrapper>
            <StyledImage src={profile}/>
        </Wrapper>

        {props.children}
    </StyledHeader>
)

export default Header