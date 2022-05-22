import React from 'react';
import cls from "./Card.module.scss";
import {Link} from "react-router-dom";


const Card = ({name, cardId, offset}) => {

	return (
		<div
			className={cls.card}
		>
			<div className={cls.cardName}>
				<h4>{name}</h4>
			</div>
			<div className={cls.cardImg}>
				<img
					src='https://play-lh.googleusercontent.com/o1xjpaWAF3bUEcPeyINNzAF3D6VuOJZh5_BXB-cuLTxcDIinPO06L1dyAz7-G68W'
					alt='PokemonImg'
				/>
			</div>

			<Link to={`/pokemon/${cardId + 1 + offset}`}>More</Link>
		</div>
	);
};

export default Card;
