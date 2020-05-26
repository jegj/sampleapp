/* src/hoc/Layout/SideBar.js */

import React from 'react';

import './SideBar.css';
import Symbols from '../images/symbols.svg';

const sidebar = props => {
	return (
		<nav className="sidebar">
			<ul className="side-nav">
				<li className="side-nav__item side-nav__item--active">
					<a href="#" className="side-nav__link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="side-nav__icon"
						>
							<use xlinkHref={`${Symbols}#icon-truck`} />	
						</svg>
						<span>Pedido</span>
					</a>
				</li>	
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="side-nav__icon"
						>
							<use xlinkHref={`${Symbols}#icon-balance-scale`} />	
						</svg>
						<span>Propuestas</span>
					</a>
				</li>	
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="side-nav__icon"
						>
							<use xlinkHref={`${Symbols}#icon-archive`} />	
						</svg>
						<span>Envios</span>
					</a>
				</li>	
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="side-nav__icon"
						>
							<use xlinkHref={`${Symbols}#icon-building`} />	
						</svg>
						<span>Empresa</span>
					</a>
				</li>	
			</ul>
			<div className="legal">
				© 2020 by jaku. Derechos reservados.
			</div>
		</nav>
	);
};

export default sidebar;
