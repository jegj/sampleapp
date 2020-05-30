/* src/Components/HeaderMenu/HeaderMenu.js */

import React, { useState, useEffect, useRef } from 'react';

import Symbols from '../../images/symbols.svg';
import user from '../../images/user.jpg';

import './HeaderMenu.css';

const HeaderMenu = props => {

	const wrapperRef = useRef(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				if ( open ) {
					setOpen(false);
				}
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ wrapperRef, open ]);

	const classes = open ? 'header-menu__content header-menu__content--open' : 'header-menu__content';
	return(
		<div  ref={wrapperRef} className="user-nav__user" onClick={(e) => {
			e.preventDefault();
			setOpen(!open);
		}}>
			<span>
				<img src={user} alt="user" className="user-nav__user-photo"/>
			</span>
			<ul class={classes}>
				<li className="header-menu__item">
					<a class="header-menu__text" href="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="header-menu__icon"
						>
							<use xlinkHref={`${Symbols}#icon-user`} />
						</svg>
						Perfil
					</a>
				</li>
				<li className="header-menu__item">
					<a class="header-menu__text" href="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="header-menu__icon"
						>
							<use xlinkHref={`${Symbols}#icon-cog`} />
						</svg>
						Ajustes
					</a>
				</li>
				<li className="header-menu__item">
					<a class="header-menu__text" href="/">
					<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="header-menu__icon"
						>
							<use xlinkHref={`${Symbols}#icon-sign-out`} />
						</svg>
						Salir
					</a>
				</li>
			</ul>
		</div>
	)
};

export default HeaderMenu;
