import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import shoppingCart from '@icons/icon_shopping_cart_notification.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';

const Header = () => {

	const [toggle, setToogle] = useState(false);
	const [toggleOrders, setToogleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToogle(!toggle);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={() =>setToogleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						<div>{state.cart.length}</div>
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;
