import { useEffect, useMemo, useReducer } from "react";
import { countriesReducer } from "../utils/reducers";
import { FETCH_SUCCESS, FETCH_ERROR } from "../utils/constants";
import url from "./fetchUrls";

const initialState = {
	countries: [],
	loading: true,
	error: "",
};

const useFetchCountries = () => {
	const [{ countries, loading, error }, dispatch] = useReducer(
		countriesReducer,
		initialState,
	);

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const res = await fetch(url.countries);
				const data = await res.json();
				dispatch({ type: FETCH_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: FETCH_ERROR });
			}
		};

		fetchCountries();
	}, []);

	const sortedCountries = useMemo(() => {
		return countries.sort((a, b) =>
			a.name.official.localeCompare(b.name.official),
		);
	}, [countries]);

	return { countries: sortedCountries, loading, error };
};

export default useFetchCountries;
