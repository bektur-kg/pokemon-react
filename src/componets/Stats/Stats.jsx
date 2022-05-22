import React from 'react';
import cls from "./Stats.module.scss";


const Stats = ({statImg, statPower}) => {
	return (
		<li><span className={cls.img}>{statImg}</span><span className={cls.power} style={{width: `${statPower}pt`}}></span></li>
	);
};

export default Stats;
