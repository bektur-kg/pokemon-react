import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getSinglePokemon} from "../../configs";
import cls from "./CardMore.module.scss";
import {AiFillHeart} from "react-icons/ai";
import {GiBoltShield, GiBroadsword, GiShieldBash} from "react-icons/gi";
import {FaShieldAlt} from "react-icons/fa";
import {BsSpeedometer} from "react-icons/bs";
import Stats from "../../componets/Stats/Stats";


const CardMore = () => {
	const {moreUrl} = useParams()
	let navigate = useNavigate()
	const [moreAbout, setMoreAbout] = useState(null)
	const [stats, setStats] = useState(null)
	const imgBase = {
		attack: <GiBroadsword/>,
		hp: <AiFillHeart/>,
		defense: <FaShieldAlt/>,
		speed: <BsSpeedometer/>,
		["special-defense"]: <GiBoltShield/>,
		["special-attack"]: <GiShieldBash/>
	}

	useEffect(() => {
		getSinglePokemon(moreUrl)
			.then(r => {
				setMoreAbout(r)
				setStats(() => {
					return r.stats.reduce((arr, item, index) => {
						return [
							...arr,
							{
								id: index,
								power: item.base_stat,
								img: imgBase[item.stat.name]
							}
						]
					}, [])
				})
			})
	}, [])


	if (!moreAbout) return <div className="lds-ellipsis">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>

	return (
		<div className={cls.moreContainer}>
			<div className={cls.moreWrapper}>
				<div className={cls.part1}>
					<div className={cls.heroName}>
						<h2>{moreAbout.name}</h2>
					</div>
					<div className={cls.heroImg}>
						<img src={moreAbout.sprites.other.dream_world.front_default}/>
					</div>
				</div>
				<div className={cls.part2}>
					<ul className={cls.about}>
						<li><span>Weight </span><span>{moreAbout.weight} kg</span></li>
						<li><span>Experience </span><span>{moreAbout.base_experience}</span></li>
						<li><span>Height </span><span>{moreAbout.height} m</span></li>
					</ul>
					<ul className={cls.stats}>
						{
							stats.map(({img, power, id}) => <Stats
								key={id}
								statImg={img}
								statPower={power}
							/>)
						}
					</ul>
				</div>
				<div
					className={cls.btnContainer}
					onClick={() => navigate('/pokemon')}
				>Back</div>
			</div>
		</div>
	);
};

export default CardMore;
