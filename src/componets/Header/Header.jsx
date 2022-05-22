import React from 'react';
import cls from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import {MdOutlineCatchingPokemon} from "react-icons/md";


const Header = () => {
	return (
		<div className={cls.headerContainer}>
			<div className={cls.wrapper}>
				<div className={cls.logo}>
					<MdOutlineCatchingPokemon/>
				</div>
				<nav className={cls.navbar}>
					<ul className={cls.navbarList}>
						<NavLink to='/' className={({isActive}) => isActive ? `${cls.active}` : ''} >Home</NavLink>
						<NavLink to='/pokemon' className={({ isActive }) => (isActive ? `${cls.active}` : '')}>Pokemons</NavLink>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
