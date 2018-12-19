import React, { Component } from 'react';
import { Formik, Field } from "formik"
import { withRouter } from "react-router-dom"
import { EnterpriseContext } from "../../components/Context/EnterpriseContext"

import Header from "../../components/Layout/Header/Header"
import Section from "../../components/Layout/Section/Section"
import Button from "../../components/General/Button/Button"
import Input from "../../components/DataEntry/Input/Input"
import Grid from "../../components/Layout/Grid/Grid"
import List from "./List"

import {
    Container,
    ContainerWrapper,
    NumberOne,
    LabelWrapper,
    Warning
} from "./styledComponents"

import validate from "./validate"

import CnpjService from "../../services/cnpjService"

class CnpjQuery extends Component {
    state = {
        queryState: undefined,
        warning: "",
    }

    getCnpj = async (id, enterprises, pushEnterprise) => {

        try {
            this.setState({
                queryState: undefined
            })

            const response = await CnpjService.getCnpj(id.replace(/[^\d]+/g,''));

            this.setState({
                queryState: "success"
            })

            if(enterprises.filter(x => x.id === id.replace(/[^\d]+/g,'')).length) {
                this.setState({
                    warning: "CNPJ já adicionado!"
                })

                return
            }

            this.pushCpnj(response.data, pushEnterprise)

        } catch (e) {
            if(e.response && e.response.status === 404) {
                this.setState({
                    queryState: "error",
                    warning: ""
                })
            }
        }
    }

    deleteFromList = (val, removeEnterprise) => {
        removeEnterprise(val)
    }

    getDetail = (val, enterprises, pushCurrentEnterprise) => {
        const { history: { push } } = this.props

        push('detail')
        pushCurrentEnterprise(enterprises.filter(el => el.id === val)[0])
    }

    pushCpnj = (value, pushEnterprise) => {
        pushEnterprise(value)        
    }

    render() {
        return (
            <Grid>
                <Section
                    direction="column">
                    <Header/>
                    <Container>
                    <EnterpriseContext.Consumer>
                        {({enterprises, pushEnterprise}) => (
                            <Formik
                                onSubmit={(values) => {
                                    this.getCnpj(values.cnpj, enterprises, pushEnterprise)
                                }}
                                validate={validate}
                                render={props => (
                                    <form onSubmit={props.handleSubmit}>
                                        <ContainerWrapper>
                                            <div>
                                                <LabelWrapper>
                                                    <NumberOne/>
                                                    <p>Buscar por CNPJ ou empresa</p>
                                                </LabelWrapper>
                                                <Field
                                                    name="cnpj"
                                                    mask={[/\d/, /\d/,".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "/",/\d/,/\d/,/\d/, /\d/, "-", /\d/, /\d/]}
                                                    queryState={this.state.queryState}
                                                    component={Input} />
                                                {this.state.warning.length ? <Warning>{this.state.warning}</Warning> : null}
                                            </div>
                                            <List
                                                detail={this.getDetail}
                                                delete={this.deleteFromList}
                                                />                                            
                                            <Button
                                                type="submit"
                                                iconColor="white"
                                                contentColor="white"
                                                buttonColor="#46f9d0"
                                                content="OK"/>                                        
                                        </ContainerWrapper>
                                    </form>
                                )} />
                        )}
                    </EnterpriseContext.Consumer>

                    </Container>
                </Section>
            </Grid>
        );
    }
}

export default withRouter(CnpjQuery)