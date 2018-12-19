import React from 'react';
import { EnterpriseContext } from "./EnterpriseContext"

// Provider.js
class EntepriseProvider extends React.Component {
    state = {
        currentEnterprise: {},
        enterprises: []
    }

    pushCurrentEnterprise = value => {
        this.setState({
            currentEnterprise: value
        })
    }

    pushEnterprise = (value) => {
        
        this.setState({
            enterprises: [...this.state.enterprises, value]
        }, () => console.log(this.state))
    }

    removeEnterprise = value => {
        this.setState({
            enterprises: this.state.enterprises.filter(el => el.id !== value)
        })
    }

    render() {
        const value = {
            ...this.state, 
            pushCurrentEnterprise: this.pushCurrentEnterprise,
            pushEnterprise: this.pushEnterprise, 
            removeEnterprise: this.removeEnterprise 
        }

        return (
            <EnterpriseContext.Provider value={value}>
                {this.props.children}
            </EnterpriseContext.Provider>
        )
    }
}

export default EntepriseProvider