import {
	FETCH_SUCCESS,
	FETCH_ERROR,
	SET_SEARCH,
	SET_SELECT,
} from "./constants";

type CountriesAction =
	| { type: typeof FETCH_SUCCESS; payload: Countries[] }
	| { type: typeof FETCH_ERROR };

export const countriesReducer = (
	state: CountriesState,
	action: CountriesAction,
) => {
	switch (action.type) {
		case FETCH_SUCCESS:
			return {
				...state,
				countries: action.payload,
				loading: false,
			};
		case FETCH_ERROR:
			return {
				...state,
				loading: false,
				error: "something went wrong",
			};
		default:
			return state;
	}
};

type CountryAction =
	| { type: typeof FETCH_SUCCESS; payload: Country[] }
	| { type: typeof FETCH_ERROR };

export const countryReducer = (state: CountryState, action: CountryAction) => {
	switch (action.type) {
		case FETCH_SUCCESS:
			return {
				...state,
				country: action.payload,
				loading: false,
			};
		case FETCH_ERROR:
			return {
				...state,
				loading: false,
				error: "Something went wrong",
			};
		default:
			return state;
	}
};

type FormActions =
	| { type: typeof SET_SEARCH; payload: string }
	| { type: typeof SET_SELECT; payload: string };

export const formReducer = (state: FormState, action: FormActions) => {
	switch (action.type) {
		case SET_SEARCH:
			return {
				...state,
				search: action.payload,
			};
		case SET_SELECT:
			return {
				...state,
				select: action.payload,
			};
		default:
			return state;
	}
};
