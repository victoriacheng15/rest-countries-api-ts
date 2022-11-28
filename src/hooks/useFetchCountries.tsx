import { useEffect, useMemo, useReducer } from "react";
import url from "./fetchUrls";

enum FetchActions {
	FETCH_SUCCESS = "fetch_success",
	FETCH_ERROR = "fetch_error",
}

interface Countries {
	name: string;
	alphaCode: string;
	alt: string;
	countryCapital: string;
	region: string;
	flags: string;
	population: string;
}

interface CountriesState {
	countries: Countries[];
	loading: boolean;
	error: string;
}

type CountriesAction =
	| {
			type: FetchActions.FETCH_SUCCESS;
			payload: Countries[];
	  }
	| {
			type: FetchActions.FETCH_ERROR;
	  };

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
		//@ts-ignore
			a.name.official.localeCompare(b.name.official),
		);
	}, [countries]);

	return { countries: sortedCountries, loading, error };
};

export default useFetchCountries;
