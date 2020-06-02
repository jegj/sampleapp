import React from 'react';
import Layout from './Layout/Layout';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

function App() {
	let routes = (
		<Layout>
			<Switch>
				<Route path="/pedido" exact render={props => <h1> Pedido</h1>} />
				<Route path="/propuesta" exact render={props => <h1>Propuestas</h1>} />
				<Route path="/mis_pedidos" render={props => <h1> Mis Pedidos</h1>} />
				<Route path="/empresa" render={props => <h1> Empresa</h1>} />
				<Redirect to="/pedido" />
			</Switch>
		</Layout>
	);
	return (routes);
}

export default withRouter(App);
