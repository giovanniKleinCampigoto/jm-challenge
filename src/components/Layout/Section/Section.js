import React from 'react';
import styled from "styled-components"

const SectionComponent = styled.section`
height: 100vh;
width: 100%;
display: flex;
flex-direction: ${props => props.direction ? props.direction : "row"}
align-items: ${props => props.align ? props.align : "flex-start"}
justify-content: ${props => props.justify ? props.justify : "flex-start"}
`;

const Section = props => (
    <SectionComponent
        direction={props.direction}
        align={props.align}
        justify={props.justify} >
        {props.children}
    </SectionComponent>
)

export default Section