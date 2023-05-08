import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	const searchValue = useRef("");

	useEffect(() => {
		searchValue.current.focus();
	}, []);
	function searchCocktail() {
		setSearchTerm(searchValue.current.value);
	}
	return (
		<section className="section search">
			<form
				className="search-form"
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<div className="form-control">
					<label htmlFor="name">search your favourite cocktail</label>
					<input
						type="text"
						name="search"
						id="name"
						onChange={searchCocktail}
						ref={searchValue}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
