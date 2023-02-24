import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext({} as ThemeContextType);

const initialState = false;

export function ThemeProvider({ children }: ChildrenProp) {
	const [dark, setDark] = useReducer(
		(prevMode: boolean) => !prevMode,
		initialState,
	);

	return (
		<ThemeContext.Provider value={{ dark, setDark }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useThemeContext = () => useContext(ThemeContext);
