/* src/hoc/Layout/Layout.js */

import React from 'react';

import Header from './Header';
import SideBar from './SideBar';
import './Layout.css';

const Layout = props => {
	return (
		<div className="container">
			<Header />
			<div className="content">
				<SideBar />
				<main className="main">
					{props.children}
				</main>
			</div>
		</div>
	);
};

export default Layout;
