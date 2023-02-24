import { useReducer, useEffect } from "react";
import { countryReducer } from "../utils/reducers";
import { FETCH_SUCCESS, FETCH_ERROR } from "../utils/constants";
import url from "./fetchUrls";

const initialState = {
	country: [],
	loading: true,
	error: "",
};

const useFetchCountry = (code: string | undefined) => {
	const [{ country, loading, error }, dispatch] = useReducer(
		countryReducer,
		initialState,
	);

	useEffect(() => {
		const fetchCountry = async () => {
			try {
				const res = await fetch(`${url.country}${code}`);
				const data = await res.json();
				dispatch({ type: FETCH_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: FETCH_ERROR });
			}
		};

		fetchCountry();
	}, [code]);

	return { country, loading, error };
};

export default useFetchCountry;
