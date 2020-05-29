/* src/hoc/Layout/Header.js */

import React from 'react';

import './Header.css';
import user from '../images/user.jpg';
import Logo from '../images/logo_200.png';
import Symbols from '../images/symbols.svg';

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
				<div className="user-nav__icon-box">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						className="user-nav__icon"
					>
						<use xlinkHref={`${Symbols}#icon-bell`} />	
					</svg>
					<span className="user-nav__notification">7</span> 
				</div>
				<div className="user-nav__user">
					<img src={user} alt="user" className="user-nav__user-photo"/>
					<span className="user-nav__user-name">Sasha</span>

					<ul class="dropdown-content" id="profile-dropdown" tabindex="0">
						<li tabindex="0">
							<a class="grey-text text-darken-1" href="user-profile-page.html">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									className="dropdown__icon"
								>
									<use xlinkHref={`${Symbols}#icon-bell`} />	
								</svg>
								{/* <i class="material-icons">person_outline</i>  */}
								Perfil
							</a>
						</li>
						<li tabindex="0"><a class="grey-text text-darken-1" href="app-chat.html"><i class="material-icons">chat_bubble_outline</i> Chat</a></li>
						<li tabindex="0"><a class="grey-text text-darken-1" href="page-faq.html"><i class="material-icons">help_outline</i> Help</a></li>
						<li class="divider" tabindex="0"></li>
						<li tabindex="0"><a class="grey-text text-darken-1" href="user-lock-screen.html"><i class="material-icons">lock_outline</i> Lock</a></li>
						<li tabindex="0"><a class="grey-text text-darken-1" href="user-login.html"><i class="material-icons">keyboard_tab</i> Logout</a></li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default header;
