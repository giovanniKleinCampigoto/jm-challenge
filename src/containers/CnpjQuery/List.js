import React from 'react';

import styled from "styled-components"
import { EnterpriseContext } from "../../components/Context/EnterpriseContext"
import { applyCnpjMask } from "../../utils/masks"

const ListItem = styled.span`
position: relative;
display: block;
padding: 15px 0;
margin-bottom: 5px;
background-color: white;
font-weight: bold;
`
const EnterpriseTitle = styled.span`
display: block;
margin-bottom: 15px;
margin-left: 20px;
font-weight: bold;
text-decoration: underline;
cursor: pointer;
`
const EnterpriseCnpj = styled.span`
display: block;
margin-left: 20px;
font-weight: bold;
`
const ListWrapper = styled.div`
height: 100%;
`

const TrashBinIcon = styled.span`
position: absolute;
top: 30px;
right: 20px;
font-size: 1.5em;
color: red;
font-weight: bold;
cursor: pointer;
:hover {
    color: #8b0000;
}
`

function renderEnterprises (props, enterprises, pushCurrentEnterprise, removeEnterprise) {
    return enterprises.map((el, index) => (
        <ListItem key={index}>
            <EnterpriseTitle className={`enterprise-title-${index}`} onClick={() => props.detail(el.id, enterprises, pushCurrentEnterprise)}>                        
                {el.name}
            </EnterpriseTitle>
            <EnterpriseCnpj>{applyCnpjMask(el.id)}</EnterpriseCnpj>
            <TrashBinIcon onClick={() => props.delete(el.id, removeEnterprise)} className={`delete-icon-${index} icon-bin`} />
        </ListItem>
    ))
}

const List = props => (
    <ListWrapper>        
        <EnterpriseContext.Consumer>
            {({enterprises, pushCurrentEnterprise, removeEnterprise}) => (
                renderEnterprises(props, enterprises, pushCurrentEnterprise, removeEnterprise)
            )}
        </EnterpriseContext.Consumer>
    </ListWrapper>
)

export default List