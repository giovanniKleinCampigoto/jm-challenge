import styled from "styled-components"

const Container = styled.div`
height: 100%;
width: 100%;
background-color: #F0F0F0;
`
const ContainerWrapper = styled.div`
display: flex;
height: 80vh;
padding: 15px;
flex-direction: column;
justify-content: space-between;
`
const ContainerWrapperNotJustified = styled.div`
display: flex;
height: 80vh;
padding: 15px;
flex-direction: column;
`

const Warning = styled.span`
color: #FFA500;
display: block;
margin-bottom: 10px;
font-weight: bold;
font-size: 0.8em;
`
const NumberOne = styled.div`
padding: 2px 8px;
font-size: 0.9em;
border: 3px solid #885EAD;
:after {
    content: "1";
    color: #885EAD;
    font-weight: bold;
}
`

const NumberTwo = styled.div`
padding: 2px 8px;
font-size: 0.9em;
border: 3px solid #885EAD;
:after {
    content: "2";
    color: #885EAD;
    font-weight: bold;
}
`

const LabelWrapper = styled.div`
display: flex;
margin-top: 25px;
justify-content: center;
padding: 20px;

p {
    font-family: "Helvetica";
    margin: 0;
    font-size: 0.8em;
    padding: 6px 30px;
    font-weight: bold;
}
`

export {
    Container,
    ContainerWrapper,
    NumberOne,
    LabelWrapper,
    Warning,
    NumberTwo,
}