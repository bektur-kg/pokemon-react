import React from 'react';
import cls from "../Pokemons/Pokemon.module.scss";
import {getAllPokemons} from "../../configs";
import Card from "../../componets/Card/Card";
import {GrFormPreviousLink} from "react-icons/gr";
import {GiMagnifyingGlass} from "react-icons/gi";


const Pokemon = () => {
	const [pokemons, setPokemons] = React.useState(null)
	const [limit, setLimit] = React.useState(20)
	const [offset, setOffset] = React.useState(0)
	const [currentPage, setCurrentPage] = React.useState(1)
	const [MAX_PAGE, setMAX_PAGE] = React.useState(null)
	const [findInput, setFindInput] = React.useState('')

	React.useEffect(() => {
		getAllPokemons(limit, offset)
			.then(res => res.json())
			.then(r => {
				setPokemons(r.results)
				setMAX_PAGE(Math.ceil(r.count / limit))
			})
	}, [currentPage]);


	const handleNextButton = () => {
		currentPage !== MAX_PAGE && setCurrentPage(prevState => prevState + 1)
		setOffset(prevState => prevState + limit)
	}

	const handlePrevButton = () => {
		currentPage !== 1 && setCurrentPage(prevState => prevState - 1)
		setOffset(prevState => prevState - limit)
	}

	if (!pokemons) return (
		<div className={cls.loadingContainer}>
			<div className={cls["lds-ellipsis"]}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>)

	if (!pokemons?.length === 0) return <h1>No pokemons</h1>

	return (
		<div className={cls.homeContainer}>

			<div className={cls.findCardContainer}>
				<input
					placeholder='Pikachu'
					value={findInput}
					onChange={e => setFindInput(e.target.value)}
				/>
				<GiMagnifyingGlass/>
			</div>

			<div className={cls.homeWrapper}>
				{
					pokemons.filter(pokemon => {
						if (findInput === '') {
							return pokemon
						} else if (pokemon.name.toLowerCase().includes(findInput.toLowerCase())) {
							return pokemon
						}
					}).map(({name}, id) =>
						<Card
							key={id}
							name={name}
							cardId={id}
							offset={offset}
						/>
					)
				}
			</div>
			<div className={cls.paginationContainer}>
				<div className={cls.pagination}>
					<GrFormPreviousLink
						onClick={handlePrevButton}
						className={`${cls.prev} ${currentPage === 1 && cls.disable}`}
					/>
					<div className={cls.current}>
						<span>{currentPage}</span>
						<span>/</span>
						<span>{MAX_PAGE}</span>
					</div>
					<GrFormPreviousLink
						onClick={handleNextButton}
						className={`${cls.next} ${currentPage === MAX_PAGE && cls.disable}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default Pokemon;
