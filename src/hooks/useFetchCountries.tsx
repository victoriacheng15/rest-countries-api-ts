import { useEffect, useMemo, useReducer } from "react";
import url from "./fetchUrls";

enum FetchActions {
	FETCH_SUCCESS = "fetch_success",
	FETCH_ERROR = "fetch_error",
}
interface FetchSuccess {
	type: FetchActions.FETCH_SUCCESS;
	payload: Countries[];
}

interface FetchFailure {
	type: FetchActions.FETCH_ERROR;
}

type CountriesAction = FetchSuccess | FetchFailure;

const initialState = {
	countries: [],
	loading: true,
	error: "",
};

const reducer = (state: CountriesState, action: CountriesAction) => {
	switch (action.type) {
		case FetchActions.FETCH_SUCCESS:
			return {
				...state,
				countries: action.payload,
				loading: false,
				error: "",
			};
		case FetchActions.FETCH_ERROR:
			return {
				...state,
				countries: [],
				loading: false,
				error: "Something went wrong",
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
				dispatch({ type: FetchActions.FETCH_ERROR });
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
