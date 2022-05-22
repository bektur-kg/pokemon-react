import React from 'react';
import cls from "./Layout.module.scss";
import {Route, Routes} from "react-router-dom";
import Header from "../../componets/Header/Header";
import Home from "../Home/Home";
import Pokemon from "../Pokemon/Pokemons";
import CardMore from "../CardMore/CardMore";


const Layout = () => {
	return (
		<div className={cls.layout}>
			<Header/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/pokemon' element={<Pokemon/>}/>
				<Route path='/pokemon/:moreUrl' element={<CardMore/>}/>
			</Routes>
		</div>
	);
};

export default Layout;
