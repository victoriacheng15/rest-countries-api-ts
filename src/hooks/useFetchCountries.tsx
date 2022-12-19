import { useEffect, useMemo, useReducer } from "react";
import url from "./fetchUrls";

export enum FetchActions {
	FETCH_SUCCESS = "fetch_success",
	FETCH_ERROR = "fetch_error",
}

type CountriesAction =
	| { type: FetchActions.FETCH_SUCCESS; payload: Countries[] }
	| { type: FetchActions.FETCH_ERROR; payload: string };

const initialState = {
	countries: [],
	loading: true,
	error: null,
};

const reducer = (state: CountriesState, action: CountriesAction) => {
	switch (action.type) {
		case FetchActions.FETCH_SUCCESS:
			return {
				...state,
				countries: action.payload,
				loading: false,
			};
		case FetchActions.FETCH_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

const useFetchCountries = () => {
	const [{ countries, loading, error }, dispatch] = useReducer(
		reducer,
		initialState,
	);

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const res = await fetch(url.countries);
				const data = await res.json();
				dispatch({ type: FetchActions.FETCH_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: FetchActions.FETCH_ERROR, payload: error });
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
