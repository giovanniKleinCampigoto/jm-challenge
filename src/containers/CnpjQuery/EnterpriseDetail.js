import React from 'react';
import styled from "styled-components"
import { withRouter } from "react-router-dom"

import Header from "../../components/Layout/Header/Header"
import Section from "../../components/Layout/Section/Section"
import Grid from "../../components/Layout/Grid/Grid"
import Button from "../../components/General/Button/Button"

import { EnterpriseContext } from "../../components/Context/EnterpriseContext"

import { applyCnpjMask } from "../../utils/masks"

import {
    Container,
    NumberTwo,
    LabelWrapper,
    ContainerWrapper
} from "./styledComponents"

const Title = styled.h1`
font-size:   1.5em;
text-align:  center;
color:       black;
font-weight: bold;
`;

const Subtitle = styled.h2`
margin:      0;
font-size:   1em;
text-align:  center;
color:       black;
font-weight: bold;
`;

const EnterpriseContainer = styled.div`
p {
    font-family: "Helvetica";
    margin: 0;
    font-size: 1em;
    padding: 6px 30px;
}

span {
    display: block;
    padding: 6px 30px;
    font-weight: bold;
}
`
const EnterpriseDetails = styled.div`
p {
    font-family: "Helvetica";
    margin: 0;
    font-size: 1em;
    padding: 6px 30px;
}

span {
    display: block;
    padding: 6px 30px;
    font-weight: bold;
}
`

const EnterpriseDetail = props => (
    <EnterpriseContext.Consumer>
        {({currentEnterprise}) => (
            
            (<Grid>
                <Section
                    direction="column">
                    <Header/>
                    <Container>    
                        {Object.keys(currentEnterprise).length ?       
                            (
                                <ContainerWrapper>                            
                                    <div>
                                        <LabelWrapper>
                                            <NumberTwo/>
                                            <p>Detalhes da empresa</p>
                                        </LabelWrapper>                       
                                    </div>
                                    <EnterpriseContainer>             
                                        <span>Nome</span>                                
                                        <p>{currentEnterprise.name}</p>
                                        <span>CNPJ</span>                                                                      
                                        <p>{applyCnpjMask(currentEnterprise.id)}</p>
                                    </EnterpriseContainer>
                                    <EnterpriseDetails>  
                                        <span>Detalhes</span>                              
                                        <p>{currentEnterprise.description}</p>                                                     
                                    </EnterpriseDetails>
                                    <Button
                                        type="button"
                                        iconColor="white"
                                        contentColor="white"
                                        buttonColor="#46f9d0"
                                        onClick={() => props.history.goBack()}
                                        content="Voltar"/> 
                                </ContainerWrapper>
                            )
                            :

                            (
                                <ContainerWrapper>
                                    <div>
                                        <LabelWrapper>
                                            <NumberTwo/>
                                            <p>Detalhes da empresa</p>
                                        </LabelWrapper>                       
                                    </div>
                                    <div>
                                        <Title>Ops...</Title>
                                        <Subtitle>Nenhuma empresa foi selecionada!</Subtitle>
                                    </div> 
                                    <div>
                                        <Button
                                            type="button"
                                            iconColor="white"
                                            contentColor="white"
                                            buttonColor="#46f9d0"
                                            onClick={() => props.history.goBack()}
                                            content="Voltar"/>
                                    </div>
                                </ContainerWrapper>
                            )                   
                        }                        
                    </Container>
                </Section>
            </Grid>)    
        )}
    </EnterpriseContext.Consumer>
)

export default withRouter(EnterpriseDetail)
    
    
