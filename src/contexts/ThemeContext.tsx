import { createContext, useContext, useReducer } from "react";

export interface ThemeContextType {
	dark: boolean;
	setDark: () => void;
}

interface ChildrenProps {
	children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType>(undefined!);

const initialState = false;

export function ThemeProvider({ children }: ChildrenProps) {
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
