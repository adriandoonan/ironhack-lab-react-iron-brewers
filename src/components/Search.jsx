import axios from "axios";
import { useEffect, useState } from "react";
const searchForBeersUrl = "https://ih-beers-api2.herokuapp.com/beers/search";

function Search({ setBeers, getAllBeers }) {
	const [searchTerm, setSearchTerm] = useState("");

	const searchForBeers = async (query) => {
		const request = await axios(searchForBeersUrl, { params: { q: query } });
		const response = await request.data;

		setBeers(response);
		return response;
	};

	useEffect(() => {
		if (searchTerm.length === 0) {
			getAllBeers();
		}
		if (searchTerm.length < 3) {
			return;
		}
		searchForBeers(searchTerm);
	}, [searchTerm]);

	return (
		<div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
			<div className="input-group mb-2 w-50">
				<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1">
						Search
					</span>
				</div>
				<input
					type="text"
					className="form-control search-bar"
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
			</div>
		</div>
	);
}

export default Search;
