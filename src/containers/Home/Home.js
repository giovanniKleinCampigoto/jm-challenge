import React, { Component } from "react";

import cookie from "universal-cookie"
import { withRouter } from "react-router-dom"

import Section from "../../components/Layout/Section/Section"
import Button from "../../components/General/Button/Button"
import Grid from "../../components/Layout/Grid/Grid"

import { USER_TOKEN } from "../../utils/userToken"

import {
    Title,
    IconChart,
    Subtitle,
    TitleWrapper,
    Wrapper
} from "./styledComponents"


class Home extends Component {

    pushToCnpjQuery = () => {
        const { props: { history } } = this

        const cookies = new cookie()

        cookies.set("ACCESS-TOKEN", USER_TOKEN);

        history.push("/cpnj-query")
    }

    render() {
        return (
            <Grid>
                <Section
                    direction="column"
                    align="stretch"
                    justify="flex-end">
                    <Wrapper>
                        <TitleWrapper>
                            <IconChart className="icon-line-chart"/>
                            <Title>Cotação de seguros</Title>
                            <Subtitle>Solução inovadora da líder de mercado</Subtitle>
                        </TitleWrapper>
                        <Button content="Iniciar" onClick={this.pushToCnpjQuery}/>
                    </Wrapper>
                </Section>
            </Grid>
        );
    }
}

export default withRouter(Home)
