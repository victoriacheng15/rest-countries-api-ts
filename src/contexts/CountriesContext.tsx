import {
	createContext,
	useReducer,
	useContext,
	useCallback,
	useMemo,
} from "react";
import useFetchCountries from "../hooks/useFetchCountries";

interface FormState {
	search: string;
	select: string;
}

interface CountriesContextType extends CountriesState, FormState {
	setSearch: (search: string) => void;
	setSelect: (select: string) => void;
}

const CountriesContext = createContext({} as CountriesContextType);

enum ActionTypes {
	SET_SEARCH = "setSearch",
	SET_SELECT = "setSelect",
}

interface SearchAction {
	type: ActionTypes.SET_SEARCH;
	payload: string;
}

interface SelectAction {
	type: ActionTypes.SET_SELECT;
	payload: string;
}

type FormActions = SearchAction | SelectAction;

const initialState = {
	search: "",
	select: "",
};

const formReducer = (state: FormState, action: FormActions) => {
	switch (action.type) {
		case ActionTypes.SET_SEARCH:
			return {
				...state,
				search: action.payload,
			};
		case ActionTypes.SET_SELECT:
			return {
				...state,
				select: action.payload,
			};
		default:
			return state;
	}
};

export function CountriesProvider({ children }: ChildrenProps) {
	const { countries, loading, error } = useFetchCountries();
	const [{ search, select }, dispatch] = useReducer(formReducer, initialState);

	const setSearch = useCallback((search: string) => {
		dispatch({
			type: ActionTypes.SET_SEARCH,
			payload: search,
		});
	}, []);

	const filteredCountries = useMemo(() => {
		return countries.filter((c) =>
			c.name.official.toLowerCase().includes(search.toLowerCase()),
		);
	}, [countries, search]);

	const setSelect = useCallback((select: string) => {
		dispatch({
			type: ActionTypes.SET_SELECT,
			payload: select,
		});
	}, []);

	const selectRegion = useMemo(() => {
		return countries.filter(({ region }) => region.includes(select));
	}, [countries, select]);

	const formParameter = search ? filteredCountries : selectRegion;

	return (
		<CountriesContext.Provider
			value={{
				countries: formParameter,
				loading,
				error,
				setSearch,
				search,
				setSelect,
				select,
			}}
		>
			{children}
		</CountriesContext.Provider>
	);
}

export const useCountriesContext = () => useContext(CountriesContext);
