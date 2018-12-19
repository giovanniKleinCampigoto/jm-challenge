import React, { Component } from 'react';
import Router from "../../router/router";
import EnterpriseProvider from "../../components/Context/EnterpriseProvider"

class App extends Component {

	render() {
		return (
			<EnterpriseProvider>
				<section className="App">
					<Router/>
				</section>
			</EnterpriseProvider>
		);
	}
}

export default App;
