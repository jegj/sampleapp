/* src/hoc/Layout/SideBar.js */

import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideBar.css';
import Symbols from '../images/symbols.svg';

const sidebar = props => {
	return (
		<nav className="sidebar">
			<ul className="side-nav">
				<li className="side-nav__item">
					<NavLink to="/pedido" exact className="side-nav__link" activeClassName="side-nav__link--active">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="side-nav__icon"
						>
							<use xlinkHref={`${Symbols}#icon-truck`} />
						</svg>
						<span className="side-nav__linktext">Pedido</span>
					</NavLink>
				</li>
				<li className="side-nav__item">
					<NavLink to="/propuesta" exact className="side-nav__link" activeClassName="side-nav__link--active">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="side-nav__icon"
						>
							<use xlinkHref={`${Symbols}#icon-balance-scale`} />
						</svg>
						<span className="side-nav__linktext">Propuestas</span>
					</NavLink>
				</li>
				<li className="side-nav__item">
					<NavLink to="/mis_pedidos" exact className="side-nav__link" activeClassName="side-nav__link--active">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="side-nav__icon"
						>
							<use xlinkHref={`${Symbols}#icon-archive`} />
						</svg>
						<span className="side-nav__linktext">Mis Pedidos</span>
					</NavLink>
				</li>
				<li className="side-nav__item">
					<NavLink to="/empresa" exact className="side-nav__link" activeClassName="side-nav__link--active">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="side-nav__icon"
						>
							<use xlinkHref={`${Symbols}#icon-building`} />
						</svg>
						<span className="side-nav__linktext">Empresa</span>
					</NavLink>
				</li>
			</ul>
			<div className="legal">
				© 2020 by jaku. Derechos reservados.
			</div>
		</nav>
	);
};

export default sidebar;
