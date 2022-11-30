import { type } from "os";
import { useReducer, useEffect } from "react";
import url from "./fetchUrls";
import { FetchActions } from "./useFetchCountries";

interface Success {
	type: FetchActions.FETCH_SUCCESS;
	payload: Country[];
}

interface Failure {
	type: FetchActions.FETCH_ERROR;
}

type CountryAction = Success | Failure;

const initialState = {
	country: [],
	loading: true,
	error: "",
};

const reducer = (state: CountryState, action: CountryAction) => {
	switch (action.type) {
		case FetchActions.FETCH_SUCCESS:
			return {
				...state,
				country: action.payload,
				loading: false,
			};
		case FetchActions.FETCH_ERROR:
			return {
				...state,
				loading: false,
				error: "Something went wrong",
			};
		default:
			return state;
	}
};

const useFetchCountry = (code: string | undefined) => {
	const [{ country, loading, error }, dispatch] = useReducer(
		reducer,
		initialState,
	);

	useEffect(() => {
		const fetchCountry = async () => {
			try {
				const res = await fetch(`${url.country}${code}`);
				const data = await res.json();
				dispatch({ type: FetchActions.FETCH_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: FetchActions.FETCH_ERROR });
			}
		};

		fetchCountry();
	});

	return { country, loading, error };
};

export default useFetchCountry;
