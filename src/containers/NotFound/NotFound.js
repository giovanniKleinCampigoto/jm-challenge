import React from 'react';
import styled from "styled-components";

import Section from "../../components/Layout/Section/Section"

const Container = styled.div`
height:           100vh;
width:            100vw;
`
const Title = styled.h1`
font-size:   5em;
text-align:  center;
color:       white;
font-weight: bold;
`;

const Subtitle = styled.h2`
margin:      0;
font-size:   3em;
text-align:  center;
color:       white;
font-weight: bold;
`;

const NotFound = () => {
    return (
        <Section backgroundPurple>
            <Container>
                <Title>404</Title>
                <Subtitle>Esta página não foi encontrada</Subtitle>

            </Container>
        </Section>
    )
}

export default NotFound