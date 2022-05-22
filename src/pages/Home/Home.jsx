import React from 'react';
import cls from "./Home.module.scss";
import {useNavigate} from "react-router-dom";


const Home = () => {
	let navigate = useNavigate()

	return (
		<section className={cls.homeContainer}>
			<div className={cls.imgContainer}>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
					alt='pokemon img'/>
			</div>
			<div className={cls.about}>
				<h1>Pokemon</h1>
				<p>«Покемо́н» — популярная медиафраншиза, созданная Сатоси Тадзири в 1996 году. Товарный знак «Покемон»
					принадлежит The Pokemon Company. «Покемон» впервые появился как пара игр, разработанных студией Game Freak, и
					после этого стал второй в мире по популярности серией компьютерных игр, уступив Mario от Nintendo.</p>
			</div>
			<div className={cls.showButtonContainer}>
				<button onClick={() => navigate('/pokemon')}>All Pokemons</button>
			</div>
		</section>
	);
};

export default Home;
