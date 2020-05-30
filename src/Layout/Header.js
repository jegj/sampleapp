/* src/hoc/Layout/Header.js */

import React from 'react';

import './Header.css';
// import user from '../images/user.jpg';
import Logo from '../images/logo_200.png';
import Symbols from '../images/symbols.svg';

import HeaderMenu from '../Components/HeaderMenu/HeaderMenu';

const header = props => {
	return (
		<header className="header">
			<img src={Logo} alt="jaku logo" className="logo"/>
			<form action="#" className="search">
				<input type="text" className="search__input" placeholder="# Pedido"/>
				<button className="search__button">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="search__icon"
						>
							<use xlinkHref={`${Symbols}#icon-search`} />	
						</svg>
				</button>
			</form>
			<nav className="user-nav">
				<HeaderMenu/>
			</nav>
		</header>
	);
};

export default header;
