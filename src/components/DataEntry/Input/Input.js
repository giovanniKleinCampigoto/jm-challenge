import React from 'react';
import styled from "styled-components"
import MaskedInput from "react-text-mask"

const InputContainer = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
width: 100%;
background-color: white;
border: 1px solid transparent;
border-color: ${props => props.hasError ? "red" : "transparent"}
`
const Label = styled.label`
color: #ccc;
margin-top: 10px;
font-size: 0.9em;
margin-left: 15px;
font-weight: bold;
`
const IconSuccess = styled.span`
position: absolute;
top: 50%;
right: 15px;
color: green;
font-size: 1.5em;
`

const IconFailure = styled.span`
position: absolute;
top: 50%;
right: 15px;
color: red;
font-size: 1.5em;
`

const StyledInput = styled.input`
padding: 15px;
width: 100%;
font-family: "Helvetica";
font-size: 1.5em;
font-weight: bold;
border-color: transparent;
:focus {
    outline: none;
}
`
const FeedBack = styled.div`
padding: 10px 0;
color: red;
font-size: 0.8em;
font-weight: bold;
font-family: "Helvetica";
`

const Input = props => (
    <React.Fragment>
        <InputContainer hasError={Object.keys(props.form.errors).length}>
            <Label>CNPJ / Empresa</Label>
            <MaskedInput
                {...props.field}
                mask={props.mask}
                guide={false}
                render={(ref, props) => (
                    <StyledInput
                        ref={input => ref(input)}
                        {...props} />
                )} />
            { props.queryState === "success" ? <IconSuccess className="icon-check-circle" /> : null }
            { props.queryState === "error" ? <IconFailure className="icon-times-circle" /> : null }
        </InputContainer>
    <FeedBack>{props.form.errors[props.field.name]}</FeedBack>
    </React.Fragment>
);


export default Input